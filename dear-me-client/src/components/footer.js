import React from 'react';

const Footer = () => (
	<footer className="pt-4 container-fluid">
		<div className="row align-items-center">
			<div className="mb-sm-4 col-md-6 about-us">
				<h2 className="text-center">About Dear Me</h2>
				<hr className="hr-title" />
				<p className="text-center">
					Dear Me is a free online Note-To-Self type app created to help people
					send a letter to their future self or to a friend or loved one at a
					specified time. The process is simple. You draft the letter, put in
					the email address you want it sent to and pick when you want to have
					the letter sent - for example, in a week, a month, a year, or even up
					to 10 years later.
				</p>
				<p className="text-center">
					Your message is stored encrypted on our server. This means that we
					can’t see the words that you’ve written, so you can write whatever you
					want here, and rest assured that no one will be judging you for it.
				</p>
				<p className="text-center">
					How you use this service is up to you. You might want to write a short
					note to motivate yourself on a weekly or monthly basis, or you can
					write a more detailed letter and send it to yourself a year later -
					the choice is yours.
				</p>
			</div>
			<div className="col-md-6">
				<hr className="hr-contact" />
				<div className="contact-div">
					<i
						className="fa fa-info-circle fa-4x mx-auto text-center pb-sm-4"
						aria-hidden="true"
					/>
					<h3 className="text-center pb-md-2">Where to find me</h3>
					<ul className="footer-navbar text-center p-0">
						<li>
							<a href="mailto:df.eporwei@gmail.com" aria-label="Email">
								<i
									className="fa fa-address-card-o fa-fw"
									aria-hidden="true"
								/>&nbsp; df.eporwei@gmail.com
							</a>
						</li>
						<li>
							<a
								href="http://www.deinyefa.com"
								aria-label="Website"
								target="_blank"
								rel="noreferrer noopener"
							>
								<i className="fa fa-laptop fa-fw" aria-hidden="true" />&nbsp;
								www.deinyefa.com
							</a>
						</li>
						<li>
							<a
								href="https://github.com/deinyefa"
								aria-label="GitHub"
								target="_blank"
								rel="noreferrer noopener"
							>
								<i
									className="fa fa-github-alt fa-fw"
									aria-hidden="true"
								/>&nbsp; GitHub
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/deinyefa/"
								aria-label="Linkedin"
								target="_blank"
								rel="noreferrer noopener"
							>
								<i
									className="fa fa-linkedin-square fa-fw"
									aria-hidden="true"
								/>&nbsp; Linkedin
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<p className="copyright m-0 pb-2">by deinyefa, 2017</p>
	</footer>
);

export default Footer;
