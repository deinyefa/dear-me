import React, { Component } from 'react';
import Letter from './letter';
import LetterReview from './LetterReview';

class LetterNew extends Component {
	state = { showLetterReview: false };

	renderContent() {
		if (this.state.showLetterReview) {
			return (
				<LetterReview
					onCancel={() => this.setState({ showLetterReview: false })}
				/>
			);
		}
		return (
			<Letter
				onLetterSubmit={() => this.setState({ showLetterReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default LetterNew;
