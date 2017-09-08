import React from 'react';

const Footer = () => (
	<footer className="pt-4 container-fluid">
		<div className="row align-items-center">
			<div className="mb-sm-4 col-md-6 about-us">
				<h2 className="text-center">What we are about.</h2>
				<hr className="hr-title" />
				<p className="text-center">
					Lorem ipsum dolor sit amet, vix illum decore deleniti ut, usu at
					labores consectetuer. Solum causae suscipiantur vis ut, est ei
					ponderum urbanitas. No vis tollit recteque. Iisque consequuntur id
					vis. Audiam perfecto constituto sit ad, eos et erant exerci blandit,
					eu mea solum meliore contentiones.
				</p>
				<p className="text-center">
					Delenit maluisset voluptatibus nec in, utamur complectitur qui no.
					Lorem utinam philosophia nam cu, unum viris id est. Cum esse vocibus
					te, mei pertinacia sententiae cu. Vim ut case ubique convenire,
					iudicabit efficiendi ea per.
				</p>
				<p className="text-center">
					His eu possim pertinax volutpat, eruditi placerat duo at, mea amet
					oporteat definitiones eu. Ex nisl libris singulis qui. Inermis
					epicurei placerat ea pri, tation aliquam in mel. Nominavi prodesset ei
					eam, sed etiam invenire delicatissimi in. An cum sonet quaerendum, ad
					nibh cetero vocent eos.
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
