import React from 'react';

import { Section, Container, Title } from './Blocks';
import '../style/components/snippets.scss';
import data from '../data';

const Snippets = () => {
	const snippetList = data.Snippets;

	return (
		<Section id='Snippets' className='snippets'>
			<Container>
				<div className='col-left'>
					<Title>
						<span>&lt;Code</span>
						<span>Snip</span>
						<span>pets /&gt;</span>
					</Title>
				</div>
				<div className='col-right'>
					<ul className='card-container'>
						{snippetList.map((item, i) => (
							<li key={i}>
								<Card sub={item.sub} title={item.title} url={item.url} />
								<div className='bg-card' />
							</li>
						))}
					</ul>
				</div>
			</Container>
		</Section>
	);
};

const Card = ({ sub, title, url }) => (
	<a target='_blank' rel='noopener noreferrer' href={url}>
		<div className='card'>
			<div className='card-text'>
				<h6>{sub}</h6>
				<h3>{title}</h3>
			</div>
		</div>
	</a>
);

export default Snippets;

//MdLaunch
