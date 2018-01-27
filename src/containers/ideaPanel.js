import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition'; 
import NewIdeaButton from '../components/newIdeaButton';
import SortIdeas from '../components/sortIdeas';
import IdeaList from '../containers/ideaList';
import NewIdea from '../components/newIdea';
import SaveButton from '../components/saveButton';

export default class IdeaPanel extends Component {
	constructor() {
		super();
		this.state = {
			entries: [],
			key: Date.now(),
			hasListUpdated: false
		}
		this.addNew = this.addNew.bind(this);
		this.clearIdea = this.clearIdea.bind(this);
	}
	addNew(e) {
		let ideaArray = this.state.entries;
		let newValue = this.state.key;
		let item = <NewIdea key={newValue} id={newValue} clearIdea={this.clearIdea} />;

		ideaArray.push(item);

		this.setState({
			entries: ideaArray,
			key: Date.now(),
			hasListUpdated: true
		})

		// var self = this;
		// setTimeout(function(){
		// 	self.setState({
		// 		hasListUpdated: false
		// 	})
		// }, 300);
	}
	clearIdea(key) {
		var newIdeaArray = this.state.entries.filter(function(item){
			return (item.key !== key.toString());
		})

		this.setState({
			entries: newIdeaArray,
			hasListUpdated: true
		})
		// var self = this;
		// setTimeout(function(){
		// 	self.setState({
		// 		hasListUpdated: false
		// 	})
		// }, 300);
		
	}
	//{ this.state.hasListUpdated && <span ref={(el) => { this.save = el; }} className='autoSaveTag'>All Changes Saved</span>}

	
	render() {
		return(
			<div className='ideaPanel'>
				<div className='ideaPanelHeader'>
					<NewIdeaButton addNew={this.addNew} />
					<SortIdeas />
					<SaveButton />
				</div>
				<IdeaList entries={this.state.entries} listUpdated={this.listUpdated} />
			</div>
		);
	}
}