import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Blocks';

import data from '../data';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};

const Header = () => {
	return (
		<header>
			<Container>
				<div className='tag'>
					<Link to='/'>
						<span>@</span>
						Chris<br />
						Intae
					</Link>
				</div>
			</Container>
		</header>
	);
};

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link to='/showcase'>Showcase</Link>
			</li>
			<li>
				<Link to='/experience'>Experience</Link>
			</li>
			<li>
				<Link to='/connect'>Connect</Link>
			</li>
		</ul>
	</nav>
);

const Footer = () => {
	const links = data.ExternalLinks;

	return (
		<Container>
			<footer>
				<div className='email-link'>
					<a href='mailto:hello@chrisintae.com'>hello@chrisintae.com</a>
				</div>
				<div className='social-links'>
					<ul>
						{links.map((link, i) => (
							<li key={i}>
								<a target='_blank' rel='noopener noreferrer' href={link.url}>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</footer>
		</Container>
	);
};

export default Layout;
