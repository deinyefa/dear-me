import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// App components
import Header from './header';
import Footer from './footer';
import Home from './home';
import Letter from './letter';
import FAQs from './faqs';
import NotFound from './not-found';

const App = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/letter" component={Letter} />
				<Route path="/faqs" component={FAQs} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default App;
