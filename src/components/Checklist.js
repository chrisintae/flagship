import React, { useState } from 'react';

import { Container, TitleSm } from './Blocks';
import data from '../data';

import '../style/components/Checklist.scss';

const Checklist = () => {
	const checklistItems = data.Checklist;

	const [ checklist, setChecklist ] = useState(checklistItems);
	const [ clickTotal, setClickTotal ] = useState(checklist.length);

	let handleClick = () => setClickTotal(clickTotal - 1);

	const handleChecked = () => {};

	return (
		<div id='website-checklist' className='checklist'>
			<Container>
				<TitleSm>Website Check</TitleSm>
				<div className='checklist-container'>
					{checklistItems.map((item, key) => (
						<div key={key} className='checklist-item strikeout'>
							<div className='check-circle' onClick={() => handleChecked}>
								<span>&#x2714;</span>
							</div>
							<div>
								<p>
									<strong>{item.title}</strong>
									<br />
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Checklist;
