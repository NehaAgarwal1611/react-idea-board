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
			hasListUpdated: false,
			nextUpdate: true
		}
		this.addNew = this.addNew.bind(this);
		this.clearIdea = this.clearIdea.bind(this);
		this.changeInField = this.changeInField.bind(this);
	}
	addNew(e) {
		let ideaArray = this.state.entries;
		let newValue = this.state.key;
		let item = <NewIdea key={newValue} id={newValue} clearIdea={this.clearIdea} changeInField={this.changeInField} />;

		ideaArray.push(item);

		this.setState({
			entries: ideaArray,
			key: Date.now(),
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
			return (item.key !== key.toString());
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
	changeInField(key) {
		console.log(key);
	}
		
	render() {
		return(
			<div className='ideaPanel'>
				<div className='ideaPanelHeader'>
					<NewIdeaButton addNew={this.addNew} />
					<SortIdeas />
					{ this.state.hasListUpdated && <SaveButton /> }
				</div>
				<IdeaList entries={this.state.entries} listUpdated={this.listUpdated} />
			</div>
		);
	}
}
