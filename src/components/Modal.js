import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/modal.scss';

const ROOT = document.getElementById('root');

class Modal extends Component {
	el = document.createElement('div');

	componentDidMount() {
		ROOT.insertAdjacentElement('afterend', this.el);
	}

	componentWillUnmount() {
		ROOT.parentNode.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			<div id='modal-root' className='modal'>
				<div className='modal-overlay' />
				<div className='modal-container'>
					<h1>{this.props.title}</h1>
					{this.props.children}
				</div>
			</div>,
			this.el
		);
	}
}

export default Modal;
