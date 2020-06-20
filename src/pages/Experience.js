import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import Contact from '../components/Contact'
// import { Button } from '../components/Elements'
import { Container, Hero, Section } from '../components/Blocks';
import img from '../static/blank300x300.jpg';
import '../components/style/experience.scss';
import '../components/style/projectcard.scss';

import data from '../data.json';

const experienceList = data.Experience;

const Experience = () => {
	return (
		<Fragment>
			<Hero
				className='home'
				title='Build. Cool. Sh*t.'
				subtitle='Abrasive yet hip title w/ a "Futura-esque" font and the juxtposition of the elegant, full-width image taken by LUM3N from Unsplash (aka credit)'
			/>

			<Container>
				<Section>
					<h1>Real Devs Code in Pink</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</Section>
			</Container>

			<Container>
				<Section>
					<h3>Freelance Clients</h3>
					<ul>
						<li>Toast POS</li>
						<li>ONE CONDOM/Global Protection</li>
						<li>Parkloco</li>
					</ul>
				</Section>
			</Container>

			<Container>
				<Section id='Experience' className='experience'>
					<div className='flex-container dir-row'>
						<div className='col-left'>
							<h4 className='serif'>Experience</h4>
						</div>
						<div className='col-right'>
							<ul className='experience-ul'>
								{experienceList.map((experience, i) => (
									<li key={i}>
										<div>
											<h4>{experience.companyName}</h4>
											<h6>{experience.position}</h6>
											<h6>{experience.duration}</h6>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</Section>
			</Container>

			<Container>
				<Section>
					<Highlight title='Got a minute?' />
				</Section>
			</Container>
		</Fragment>
	);
};

const Highlight = ({ title }) => (
	<section id='highight' className='highlight'>
		<div className='full'>
			<div className='container'>
				<h3>{title}</h3>
			</div>
			<div className='flex'>
				<Link to='/projects/athenahealth-covid19-hub'>
					<div className='project-card'>
						<div>
							<h4>Project Title</h4>
							<h5>Company</h5>
						</div>
						<img alt='img' src={img} />
					</div>
				</Link>
				<Link to='/projects/athenahealth-wwa'>
					<div className='project-card'>
						<div>
							<h4>Project Title</h4>
							<h5>Company</h5>
						</div>
						<img alt='img' src={img} />
					</div>
				</Link>
			</div>
		</div>
	</section>
);

export default Experience;
