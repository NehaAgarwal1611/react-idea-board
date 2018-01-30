import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class IdeaList extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.createIdea = this.createIdea.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleClick(key) {
		this.props.clearIdea(key);
	}

	handleOnChange(e, key) {
		console.log("e.target.className ", e.target.className);
		console.log("e.target.value ", e.target.value);
		console.log("this.ideaTitle.value ", this.ideaTitle.value);
		console.log("this.ideaDesc.value ", this.ideaDesc.value);
		console.log("key ", key);
		this.props.changeInField(e.target.className, e.target.value, this.ideaTitle.value, this.ideaDesc.value, key);
	}

	createIdea(idea) {
		return (
			<li key={idea.key} className='newIdea'>
				<form>
					<button type='button' onClick={() => {this.handleClick(idea.key)}}>X</button>
					<input ref={(el) => { this.ideaTitle = el; }} className='ideaHeading' type='text' placeholder='Title' onChange={(e) => {this.handleOnChange(e, idea.key)}} value={idea.title} />
					<textarea ref={(el) => { this.ideaDesc = el; }} className='ideaDesc' rows="8" placeholder="Description" onChange={(e) => {this.handleOnChange(e, idea.key)}} value={idea.desc} />
				</form>
			</li>
		)
	}
	render() {
		var ideaArray = this.props.entries;
		var listItems = ideaArray.map(this.createIdea);

		return(
			<ul className='ideaList'>
				{listItems}
			</ul>
		);
	}
}