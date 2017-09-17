const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const { Schema } = mongoose;
const bodyParser = require('body-parser');
const letter = require('./queue/letters');
// -- initial setup -- //
mongoose.connect(keys.mongoURI);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const letterSchema = new Schema({
	name: String,
	email: String,
	subject: String,
	message: String,
	sendWhen: String
});

const Letter = mongoose.model('Letters', letterSchema);

// ------------ ROUTE HANDLER FOR FORM SUBMISION ----------- //
// process the form submission

app.post('/sendLetter', (req, response) => {
	const letterData = new Letter(req.body);
	letterData
		.save()
		.then(item => {
			letter.send(item);
		})
		.then(() => {
			response.redirect('/');
		})
		.catch(() => {
			response.status(400).send('something went wrong, please try again later');
		});
});

if (process.env.NODE_ENV === 'production') {
	// express will serve up production assests like main.js or main.css file
	app.use(express.static('dear-me-client/build'));
	// express will serve index.html if it doesnt know route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(
			path.resolve(__dirname, 'dear-me-client', 'build', 'index.html')
		);
	});
}

// ---------------- PORT ------------- //
const PORT = process.env.PORT || 5000;
app.listen(PORT);
