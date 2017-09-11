import React from 'react';
import { connect } from 'react-redux';

const LetterReview = ({ onCancel, formValues }) => {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-2">Great!</h1>
				<p className="lead">
					Here is what your letter will say. This is your chance to make any
					last minute changes, otherwise, go ahead and click send to schedule
					your message!
				</p>
			</div>
			<div>
				<h4>Name:</h4>
				<p>{formValues.name}</p>
				<h4>Email:</h4>
				<p>{formValues.email}</p>
				<h4>Subject:</h4>
				<p>{formValues.subject}</p>
				<h4>Message:</h4>
				<p>{formValues.message}</p>
				<h4>Send Date:</h4>
				<p>{formValues.sendWhen}</p>
			</div>
			<div>
				<button type="button" className="btn btn-danger" onClick={onCancel}>
					Go Back
				</button>
				<button type="button" className="btn btn-success">
					Send
				</button>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.letter.values
	};
}

export default connect(mapStateToProps)(LetterReview);
