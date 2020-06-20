import React from 'react';
import { Section, Container, Title } from './Blocks';
import '../style/components/experience.scss';

import data from '../data';

const Experience = () => {
	const experienceList = data.Experience;

	return (
		<Section id='Experience' className='experience'>
			<Container>
				<div className='col-left'>
					<Title>
						<span>Ex</span>
						<span>per</span>
						<span>ience</span>
					</Title>
				</div>
				<div className='col-right'>
					<ul className='experience-container'>
						{experienceList.map((experience, i) => (
							<li key={i} className='experience-item'>
								<h3>{experience.companyName}</h3>
								<h3>
									{experience.position}, <span>{experience.team}</span>
								</h3>
								<p>{experience.duration}</p>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</Section>
	);
};

export default Experience;
