import React from 'react';

const Letter = () => (
	<div className="letter-container">
		<h1 className="">What would you tell your future self if you could?</h1>
		<p className="">
			Pen a letter today, schedule when you want to recieve it.
		</p>

		<form className="letter">
			<div className="form-group">
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					className="form-control"
					id="name"
					placeholder="enter your name"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					className="form-control"
					id="email"
					placeholder="enter your email"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="subject">Subject</label>
				<input
					type="text"
					className="form-control"
					id="subject"
					placeholder="enter the subject of your letter"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="message">Message</label>
				<textarea
					type="text"
					className="form-control"
					id="message"
					placeholder="what would you like to say?"
					rows="10"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="send-date">
					When would you like your message to be sent?
				</label>
				<select className="form-control" id="send-date">
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
		</form>
	</div>
);

export default Letter;
