import React from 'react';
import { Button } from 'reactstrap';

const Home = () => (
	<main>
		<h1>Write a letter to your future self</h1>
		<p>
			Free emailing service that allows you to contact your future self.
			<br /> Write something today and recieve it in the future.
		</p>
		<Button outline color="success" href="/letter">
			Get Started
		</Button>{' '}
	</main>
);

export default Home;
