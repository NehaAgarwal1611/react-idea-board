import React, {Component} from 'react';

export default class NewIdea extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleClick(key) {
		this.props.clearIdea(key);
	}

	handleOnChange(key) {
		this.props.changeInField(key);
	}

	render() {
		return(
			<div className='newIdea'>
				<form>
					<button type='button' onClick={() => this.handleClick(this.props.id)}>X</button>
					<input className='ideaHeading' type='text' placeholder='Title' onChange={() => this.handleOnChange(this.props.id)} />
					<textarea className='ideaDesc' rows="8" placeholder="Description"></textarea>
				</form>
			</div>
		);
	}
}