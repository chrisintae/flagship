import React from 'react';

const Section = ({ id, className, children }) => (
	<section id={id} className={className}>
		{children}
	</section>
);

const Container = ({ className, children }) => (
	<div className={`container ${className ? className : ''}`}>{children}</div>
);

const Title = ({ children }) => <h5 className='section-title lg'>{children}</h5>;
const TitleSm = ({ children }) => <h5 className='section-title sm'>{children}</h5>;

const Hero = ({ className, title, subtitle, children }) => (
	<div className={`hero ${className ? className : ''}`}>
		<Container>
			<h1>{title}</h1>
			<h3>{subtitle}</h3>
			{children}
		</Container>
	</div>
);

export { Container, Hero, Section, Title, TitleSm };
