import React from 'react';
import { Section, Container, Title } from './Blocks';
import '../style/components/work.scss';
import Img1 from '../static/work-athenahealth-epocrates.png'
import Img2 from '../static/work-speak-easy-b.png'
import Img3 from '../static/work-parkloco.png'
import Img4 from '../static/work-welo-app.jpg'



const Work = () => {
	return (
		<Section id='Work' className='work'>
			<Container>
				<Title>
					<span>Re</span>
					<span>cent</span>
					<span>Work</span>
				</Title>

				<div className='work-list-container'>
					{}
					<div className='work-item'>
						<p className='work-number'>01</p>
						<div className='work-desc'>
							<div className='overlay'>
								<h2>athenahealth</h2>
								<h2>
									<span>Content as a Service (CaaS)</span>
									<span>React</span>
									<span>Drupal</span>
								</h2>
								<a href='http://www.athenahealth.com'>athenahealth</a> | <a href='http://www.epocrates.com'>epocrates</a> | <a href='http://www.athenahealth.com/knowledge-hub'>knowledge hub</a>
							</div>
							<div className='work-img-container'>
								<img alt='Work - athenahealth + epocrates' src={ Img1 }/>
							</div>
						</div>
					</div>

					<div className='work-item'>
						<p className='work-number'>02</p>
						<div className='work-desc'>
							{/* <div className='overlay'>
									<h2>Title of Work</h2>
									<h4>Company Name</h4>
									<a href='#'>Go to work</a>
								</div> */}
							<div className='work-img-container'>
								<img alt='Project - Speak Easy B' src={ Img2 } />
							</div>
						</div>
					</div>

					<div className='work-item'>
						<p className='work-number'>03</p>
						<div className='work-desc'>
							{/* <div className='overlay'>
									<h2>Title of Work</h2>
									<h4>Company Name</h4>
									<a href='#'>Go to work</a>
								</div> */}
							<div className='work-img-container'>
								<img alt='Woek - Parkloco Start Up' src={ Img3 } />
							</div>
						</div>
					</div>

					<div className='work-item'>
						<p className='work-number'>04</p>
						<div className='work-desc'>
							{/* <div className='overlay'>
									<h2>Title of Work</h2>
									<h4>Company Name</h4>
									<a href='#'>Go to work</a>
								</div> */}
							<div className='work-img-container'>
								<img alt='Project - Welo App Onboarding' src={ Img4 } />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default Work;
