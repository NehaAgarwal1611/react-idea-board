import React, {Component} from 'react';

export default class NewIdeaButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<button className='createNew' type='submit' onClick={this.props.addNew}>New Idea</button>
		);
	}
}