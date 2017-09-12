import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import keys from '../../config/keys';

const LetterReview = ({ onCancel, formValues, submitLetter, history }) => {
	function onChange(response) {
		this.setState({
			'g-recaptcha-response': response
		});
	}

	return (
		<div>
			<div className="letter-container">
				<h1>Great!</h1>
				<p>
					Here is what your letter will say. This is your chance to make any
					last minute changes, otherwise, go ahead and click send to schedule
					your message!
				</p>
			</div>
			<div className="container review-holder">
				<div className="row values-row align-items-center">
					<div className="col-md-6 text-center">
						<h4>Name:</h4>
					</div>
					<div className="col-md-6 text-center">
						<p>{formValues.name}</p>
					</div>
				</div>

				<div className="row values-row align-items-center">
					<div className="col-md-6 text-center">
						<h4>Email:</h4>
					</div>
					<div className="col-md-6 text-center">
						<p>{formValues.email}</p>
					</div>
				</div>

				<div className="row values-row align-items-center">
					<div className="col-md-6 text-center">
						<h4>Subject:</h4>
					</div>
					<div className="col-md-6 text-center">
						<p>{formValues.subject}</p>
					</div>
				</div>

				<div className="row values-row align-items-center">
					<div className="col-md-6 text-center">
						<h4>Message:</h4>
					</div>
					<div className="col-md-6 text-center">
						<p>{formValues.message}</p>
					</div>
				</div>

				<div className="row values-row align-items-center">
					<div className="col-md-6 text-center">
						<h4>To Be Sent In:</h4>
					</div>
					<div className="col-md-6 text-center">
						<p>{formValues.sendWhen}</p>
					</div>
				</div>
			</div>
			<div className="text-center mb-3">
				<button
					type="button"
					className="btn btn-outline-danger mx-3"
					onClick={onCancel}
				>
					Go Back
				</button>
				<button
					type="button"
					className="btn btn-outline-success mx-3"
					onClick={() => submitLetter(formValues, history)}
				>
					Send
				</button>
			</div>

			<ReCAPTCHA
				ref="recaptcha"
				sitekey={keys.reCAPTCHA_SITE_KEY}
				onChange={this.onChange.bind(this)}
			/>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		formValues: state.form.letter.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(LetterReview));
