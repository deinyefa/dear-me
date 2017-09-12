import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import formFields from './formFields';

class Letter extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name, type, component }) => {
			return (
				<Field
					key={name}
					component={component}
					type={type}
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div className="letter-container">
				<h1>What would you tell your future self if you could?</h1>
				<p>Pen a letter today, and schedule when you want to recieve it.</p>

				<form
					className="letter"
					onSubmit={this.props.handleSubmit(this.props.onLetterSubmit)}
				>
					{this.renderFields()}

					<button type="submit" className="btn btn-success">
						Review
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};
	const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!re.test(values.email)) {
		errors.email = formFields[1].noValueError;
	}

	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
};

export default reduxForm({
	validate,
	form: 'letter',
	destroyOnUnmount: false
})(Letter);
