const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const { Schema } = mongoose;
const bodyParser = require('body-parser');
// -- initial setup -- //
mongoose.connect(keys.mongoURI);
const app = express();
require('./routes/authRoutes')(app);

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------- PORT ------------- //
const PORT = process.env.PORT || 5000;
app.listen(PORT);

const letterSchema = new Schema({
	name: String,
	email: String,
	subject: String,
	message: String,
	sendWhen: String
});
var Letters = mongoose.model('Letters', letterSchema);

// ------------ ROUTE HANDLER FOR FORM SUBMISION ----------- //
// process the form submission
app.post('/sendLetter', (req, res) => {
	const letterData = new Letters(req.body);
	letterData
		.save()
		.then(item => {
			res.redirect('/letter');
		})
		.catch(err => {
			res.status(400).send('something went wrong, please try again later');
		});
});
