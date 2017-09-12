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
const request = require('request');
const Q = require('Q');

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

function verifyHumanity(req) {
	const d = Q.defer();
	const recaptchaResponse = req.body['g-recaptcha-response'];

	request.post(
		'https://www.google.com/recaptcha/api/siteverify',
		{
			form: {
				secret: keys.reCAPTCHA_SECRET_KEY,
				response: recaptchaResponse,
				remoteip: req.connection.remoteAddress
			}
		},
		(err, httpResponse, body) => {
			if (err) {
				d.reject(new Error(err));
			} else {
				const r = JSON.parse(body);
				if (r.success) {
					d.resolve(r.success);
				} else {
					d.reject(new Error());
				}
			}
		}
	);
	return d.promise;
}

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
	console.log(letterData);
	letterData
		.save()
		.then(item => {
			response.redirect('/');
		})
		.catch(() => {
			response.status(400).send('something went wrong, please try again later');
		});
});
