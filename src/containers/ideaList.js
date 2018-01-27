import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class IdeaList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ul className='ideaList'>
				{this.props.entries}
			</ul>
		);
	}
}