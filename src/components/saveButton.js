import React, {Component} from 'react';

export default class SaveButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<button ref={(el) => {this.saveButton = el;}} className='saveButton'>All Changes Saved</button>
		);
	}
}