//- not use button, instead list links on small screens
//- with NavLink, use .active to style currently active links

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header className="container-fluid">
		<div className="row">
			<a href="/" className="nav-brand col-md-6">
				<i className="fa fa-envelope-o fa-1x" aria-hidden="true" /> Dear Me
			</a>

			<ul className="main-nav col-md-6">
				<li>
					<NavLink exact to="/" className="text-center">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/letter" className="text-center">
						Write a letter
					</NavLink>
				</li>
				<li>
					<NavLink to="/faqs" className="text-center">
						FAQs
					</NavLink>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
