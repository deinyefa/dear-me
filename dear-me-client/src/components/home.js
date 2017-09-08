import React from 'react';
import { Button } from 'reactstrap';

const Home = () => (
	<main>
		<div className="image">
			<h1>Write a letter to your future self</h1>
			<p>
				We are a free emailing service that allows you to contact your future
				self.
				<br /> Write something today and recieve it in the future.
			</p>
			<Button outline color="success" href="/letter">
				Get Started
			</Button>{' '}
		</div>
	</main>
);

export default Home;
