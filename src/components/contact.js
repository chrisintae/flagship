import React, { Fragment } from 'react';
import { DiReact } from 'react-icons/di';
import { RiEmotionLaughLine } from 'react-icons/ri';
import { Section, Container } from './Blocks';
import '../style/components/contact.scss';

const Contact = () => {
	return (
		<Section id='Contact' className='contact'>
			<Container>
				<Thanks />
			</Container>
		</Section>
	);
};

const Thanks = () => (
	<Fragment>
		<h2>
			built w/{' '}
			<span>
				<DiReact />
			</span>{' '}
			+ react-icons
		</h2>
		<h2>
			design for{' '}
			<span>
				<RiEmotionLaughLine />
			</span>{' '}
			from somerville, ma
		</h2>
	</Fragment>
);

const ContactMe = () => (
	<Fragment>
		<form>
			<input />
		</form>
		<p className='section-title'>
			<span>Con</span>
			<span>tact</span>
			<span>me</span>
		</p>
	</Fragment>
);

export { Contact, Thanks, ContactMe };
