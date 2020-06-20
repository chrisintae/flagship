import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Layout from './Layout'
import Project from '../templates/Project'
// import ToggleContent from '../components/ToggleContent';
// import Modal from '../components/Modal';

function App() {

  return (
    <>
      <Layout>
        <Switch>
          <Route path='/showcase'>
            <Showcase />
          </Route>
          <Route path='/experience'>
            <Experience />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}


const Showcase = () => {
  return (
    <>
      <Project 
        title='Project Title'
        subtitle='Lorem ipsum dolor sit amet'
      />
    </>
  )
}
const Experience = () => <h2>Experience</h2>
// const Connect = () => {
//   return (
//       <>
//         <h2>Connect</h2>
//         <ToggleContent
// 				toggle={(show) => <button onClick={show}>Open</button>}
// 				content={(hide) => (
// 					<Modal title='Modal Content'>
// 						<p>
// 							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
// 							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
// 							laboris nisi ut aliquip ex ea commodo consequat.
// 						</p>
// 						<button onClick={hide}>Close</button>
// 					</Modal>
// 				)}
// 			/>
//       </>
//     )
// }



export default App;
