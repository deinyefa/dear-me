import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputField, TextareaField, SelectField } from './fields';

const FIELDS = [
	{
		label: 'Name',
		name: 'name',
		type: 'text',
		component: InputField,
		noValueError: 'You have to provide a name'
	},
	{
		label: 'Email',
		name: 'email',
		type: 'email',
		component: InputField,
		noValueError: 'You have to provide a valid email'
	},
	{
		label: 'Subject',
		name: 'subject',
		type: 'text',
		component: InputField,
		noValueError: 'You have to provide a subject line'
	},
	{
		label: 'Message',
		name: 'message',
		type: 'text',
		component: TextareaField,
		noValueError: 'You have to provide a message'
	},
	{
		label: 'When would you like your message to be sent?',
		name: 'sendWhen',
		component: SelectField,
		noValueError: 'When should we send your letter?'
	}
];

class Letter extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name, type, component }) => {
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
		errors.email = FIELDS[1].noValueError;
	}

	_.each(FIELDS, ({ name, noValueError }) => {
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
