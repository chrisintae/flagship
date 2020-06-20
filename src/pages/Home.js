import React from 'react';
import Layout from '../components/Layout';
import { Section, Container, TitleSm } from '../components/Blocks';
import Work from '../components/work';
import Experience from '../components/experience';
import Snippets from '../components/Snippets';
import { Contact } from '../components/contact';
import '../style/pages/home.scss';

const Home = () => {
	return (
		<Layout>
			<Section id='Home' className='hero'>
				<div className='hero-bg-container' />
				<div className='hero-text-container'>
					<Container>
						<h1>
							<span>build</span>
							<span>cool</span>
							<span>sh*t</span>
						</h1>
						<p>
							Navs are overrated<br />
							Let's take a scroll together
						</p>
					</Container>
				</div>
			</Section>
			<Section id='Methodology' className='methodology'>
				<div className='methodology-circle-container' />
				<Container>
					<TitleSm>methodology</TitleSm>
					<h4>design w/ human-purpose</h4>
					<h4>develop for user ease</h4>
					<h4>don't over engineer</h4>
				</Container>
			</Section>
			<Work />
			<Experience />
			<Snippets />
			<Section id='Checklist' className='checklist'>
				<Container>
					<TitleSm>Thnks fr th Mmrs</TitleSm>
					<p>- Patrick Stump, Fall Out Boy</p>
				</Container>
			</Section>
			<Contact />
		</Layout>
	);
};

export default Home;
