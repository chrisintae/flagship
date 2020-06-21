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
							<div className='work-img-container'>
								<img alt='Work - athenahealth + epocrates' src={ Img1 }/>


								<div className='work-overlay'>
									<h3>athenahealth</h3>
									<h2>
										<span>React</span>
										<span>Drupal</span>
										<span>CaaS</span>
										<span>Headless CMS</span>
									</h2>
									<p>
									<a href='http://www.athenahealth.com'>athenahealth</a> | <a href='http://www.epocrates.com'>epocrates</a> | <a href='http://www.athenahealth.com/knowledge-hub'>knowledge hub</a></p>
								</div>
							</div>
						</div>
					</div>

					<div className='work-item'>
						<p className='work-number'>02</p>
						<div className='work-desc'>
							<div className='work-img-container'>
								<img alt='Project - Speak Easy B' src={ Img2 } />

								<div className='work-overlay'>
									<h3>Speak Easy B Movie</h3>
									<h2>
										<span>React</span>
										<span>React Icons</span>
									</h2>
									<p>
									<a href='http://www.athenahealth.com'>athenahealth</a> | <a href='http://www.epocrates.com'>epocrates</a> | <a href='http://www.athenahealth.com/knowledge-hub'>knowledge hub</a></p>
								</div>
							</div>
						</div>
					</div>

					<div className='work-item'>
						<p className='work-number'>03</p>
						<div className='work-desc'>
							<div className='work-img-container'>
								<img alt='Woek - Parkloco Start Up' src={ Img3 } />

								<div className='work-overlay'>
									<h3>Parkloco</h3>
									<h2>
										<span>Product</span>
										<span>Web Design</span>
									</h2>
									<p>
									<a href='http://www.parkloco.com'>parkloco</a></p>
								</div>
							</div>
						</div>
					</div>

					<div className='work-item'>
						<p className='work-number'>04</p>
						<div className='work-desc'>
							<div className='work-img-container'>
								<img alt='Project - Welo App Onboarding' src={ Img4 } />

								<div className='work-overlay'>
									<h3>Welo App</h3>
									<h2>
										<span>Design</span>
										<span>User Flow</span>
										<span>Onboarding</span>
									</h2>
									<p>
									<a href='http://www.weloapp.io'>weloapp.io</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default Work;
