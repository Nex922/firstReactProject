import React, { Component } from 'react';
import './Scroll.css';

class Scroll extends Component {
	render() {
		return (
			<div className='scroll'
				// style= {{
				// 	overflowY: 'scroll',
				// 	height: '900px'
				// }}
				>
				{this.props.children}
			</div>
		)
	}
}

export default Scroll;