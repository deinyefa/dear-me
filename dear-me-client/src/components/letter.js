import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Letter extends Component {
	constructor(props) {
		super(props);
		this.state = { data: '' };
	}

	previewLetter() {
		this.setState({
			data: {
				name: ReactDOM.findDOMNode(this.refs.name).value,
				email: ReactDOM.findDOMNode(this.refs.email).value,
				subject: ReactDOM.findDOMNode(this.refs.subject).value,
				message: ReactDOM.findDOMNode(this.refs.message).value,
				sendWhen: ReactDOM.findDOMNode(this.refs.sendWhen).value
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		document.getElementByID('container').scrollIntoView();
		this.setState({ type: 'info', message: 'Sending...' });
	}

	//- show success message when data is sent to the database

	render() {
		if (this.state.type && this.state.message) {
			var classString = 'alert alert-' + this.state.type;
			var status = (
				<div id="status" className={classString} ref="status">
					{this.state.message}
				</div>
			);
		}
		return (
			<div className="letter-container">
				<h1>What would you tell your future self if you could?</h1>
				<p>Pen a letter today, and schedule when you want to recieve it.</p>
				{status}
				<form
					action="/sendLetter"
					className="letter"
					onSubmit={this.handleSubmit}
					method="post"
				>
					<div className="form-group">
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							ref="name"
							placeholder="enter your name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							className="form-control"
							id="email"
							name="email"
							ref="email"
							placeholder="enter your email"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							className="form-control"
							id="subject"
							name="subject"
							ref="subject"
							placeholder="enter the subject of your letter"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							type="text"
							className="form-control"
							id="message"
							name="message"
							ref="message"
							placeholder="what would you like to say?"
							rows="10"
						/>
					</div>
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
						Preview...
					</button>
				</form>
			</div>
		);
	}
}
