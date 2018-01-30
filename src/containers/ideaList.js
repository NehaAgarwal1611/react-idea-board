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
		let ideaList;
		if(this.props.entries.length) {
			ideaList = this.props.entries;
		} else {
			ideaList = []
		}
		ideaList.map((item, index) => {
			if(key == item.key) {
				if(e.target.className === 'ideaHeading') {
					item.title = e.target.value
				} else if (e.target.className === 'ideaDesc') {
					item.desc = e.target.value
				}			
			}
		})

		this.props.changeInField(ideaList);
	}

	createIdea(idea) {
		return (
			<li key={idea.key} className='newIdea'>
				<form>
					<button type='button' onClick={() => {this.handleClick(idea.key)}}>X</button>
					<input className='ideaHeading' type='text' placeholder='Title' onChange={(e) => {this.handleOnChange(e, idea.key)}} value={idea.title} />
					<textarea className='ideaDesc' rows="8" placeholder="Description" onChange={(e) => {this.handleOnChange(e, idea.key)}} value={idea.desc} />
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