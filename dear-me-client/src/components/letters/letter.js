import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputField, TextareaField } from './fields';

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
					onSubmit={this.props.handleSubmit(values => console.log(values))}
					method="post"
				>
					{this.renderFields()}

					<div className="form-group">
						<label htmlFor="send-date">
							When would you like your message to be sent?
						</label>
						<select
							className="form-control"
							id="sendWhen"
							name="sendWhen"
							ref="sendWhen"
						>
							<option>1 week</option>
							<option>1 month</option>
							<option>3 months</option>
							<option>6 months</option>
							<option>9 months</option>
							<option>1 year</option>
							<option>2 years</option>
							<option>3 years</option>
							<option>5 years</option>
							<option>10 years</option>
						</select>
					</div>
					<button type="submit" className="btn btn-success">
						Preview
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	_.each(FIELDS, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
};

export default reduxForm({
	validate,
	form: 'letter'
})(Letter);
