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
