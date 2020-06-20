import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import './style/style.scss';
import * as serviceWorker from './serviceWorker';

const ROOT = document.getElementById('root');

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	ROOT
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
