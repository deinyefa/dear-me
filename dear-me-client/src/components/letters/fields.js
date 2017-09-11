import React from 'react';

export function InputField({ input, label, meta: { error, touched } }) {
	return (
		<div className="form-group">
			<label htmlFor={label}>{label}</label>
			<input
				{...input}
				id={label}
				className="form-control"
				placeholder={'enter your ' + label.toLowerCase()}
			/>
			<div className="invalid-feedback">{touched && error}</div>
		</div>
	);
}

export function TextareaField({ input, label, meta: { error, touched } }) {
	return (
		<div className="form-group">
			<label htmlFor={label}>{label}</label>
			<textarea
				{...input}
				id={label}
				className="form-control"
				rows="10"
				placeholder="what would you like to say?"
			/>
			<div className="invalid-feedback">{touched && error}</div>
		</div>
	);
}

export function SelectField({ input, label, meta: { error, touched } }) {
	return (
		<div className="form-group">
			<label htmlFor={label}>{label}</label>
			<select {...input} id={label} className="form-control">
				<option value="">Select...</option>
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
			<div className="invalid-feedback">{touched && error}</div>
		</div>
	);
}
