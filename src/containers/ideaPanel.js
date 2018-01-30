import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition'; 
import NewIdeaButton from '../components/newIdeaButton';
import SortIdeas from '../components/sortIdeas';
import IdeaList from '../containers/ideaList';
//import NewIdea from '../components/newIdea';
import SaveButton from '../components/saveButton';

export default class IdeaPanel extends Component {
	constructor() {
		super();
		this.state = {
			entries: [],
			hasListUpdated: false,
			nextUpdate: true
		}
		this.addNew = this.addNew.bind(this);
		this.clearIdea = this.clearIdea.bind(this);
		this.changeInField = this.changeInField.bind(this);
	}
	addNew(e) {
		let ideaArray = this.state.entries;
		
		ideaArray.push({
			title: '',
			desc: '',
			key: Date.now()
		})

		this.setState({
			entries: ideaArray,
			hasListUpdated: true
		})

		var self = this;
		setTimeout(function(){
			self.setState({
				hasListUpdated: false
			})
		}, 500);
	}
	clearIdea(key) {
		var newIdeaArray = this.state.entries.filter(function(item){
			return (item.key !== key);
		})

		this.setState({
			entries: newIdeaArray,
			hasListUpdated: true
		})

		var self = this;
		setTimeout(function(){
			self.setState({
				hasListUpdated: false
			})
		}, 500);
	}
	changeInField(ideaArray) {
		this.setState({
			entries: ideaArray,
			hasListUpdated: true
		})

		var self = this;
		setTimeout(function(){
			self.setState({
				hasListUpdated: false
			})
		}, 500);
	}
		
	render() {
		return(
			<div className='ideaPanel'>
				<div className='ideaPanelHeader'>
					<NewIdeaButton addNew={this.addNew} />
					<SortIdeas />
					{ this.state.hasListUpdated && <SaveButton /> }
				</div>
				<IdeaList entries={this.state.entries} clearIdea={this.clearIdea} changeInField={this.changeInField} listUpdated={this.listUpdated} />
			</div>
		);
	}
}