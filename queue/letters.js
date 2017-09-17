const moment = require('moment');
const nodemailer = require('nodemailer');
let transporter;
if (process.env.NODE_ENV === 'production') {
	transporter = nodemailer.createTransport({
		host: process.env.MAILGUN_SMTP_SERVER,
		port: process.env.MAILGUN_SMTP_PORT,
		auth: {
			user: process.env.MAILGUN_SMTP_LOGIN,
			pass: process.env.MAILGUN_SMTP_PASSWORD
		}
	});
} else {
	transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'iemoz2cfwtedt73q@ethereal.email',
			pass: '5GuDzjcYFeznXtdAXT'
		}
	});
}

let redisConfig;
if (process.env.NODE_ENV === 'production') {
	redisConfig = {
		redis: process.env.REDISCLOUD_URL
	};
} else {
	redisConfig = {};
}

const queue = require('kue').createQueue(redisConfig);

queue.watchStuckJobs(6000);

queue.on('ready', () => {
	// If you need to
	console.info('Queue is ready!');
});

queue.on('error', err => {
	// handle connection errors here
	console.error('There was an error in the main queue!');
	console.error(err);
	console.error(err.stack);
});

queue.process('letter', (job, done) => {
	// This is the data we sent into the #create() function call earlier
	// We're setting it to a constant here so we can do some guarding against accidental writes
	const data = job.data;

	let mailOptions = {
		from: '"Your future self" <future-self@dearme.deinyefa.com>',
		to: '"' + data.name + '" <' + data.email + '>',
		subject: data.subject,
		text: data.message
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
		if (process.env.NODE_ENV !== 'production') {
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		}
	});
});

function sendLetter(data) {
	milliseconds_to_delay = moment()
		.add(data.sendWhen.split(' ')[0], data.sendWhen.split(' ')[1])
		.diff(moment(), 'milliseconds');
	console.log(milliseconds_to_delay);
	return queue
		.create('letter', data)
		.priority('critical')
		.attempts(8)
		.backoff(true)
		.removeOnComplete(true)
		.delay(milliseconds_to_delay)
		.save();
}

module.exports = {
	send: (data, done) => {
		sendLetter(data, done);
	}
};
