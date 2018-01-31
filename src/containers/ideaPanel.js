import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition'; 
import NewIdeaButton from '../components/newIdeaButton';
import SortIdeas from '../components/sortIdeas';
import IdeaList from '../containers/ideaList';
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
		this.sortByAlphabet = this.sortByAlphabet.bind(this);
		this.sortByDate = this.sortByDate.bind(this);
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
	sortByAlphabet() {
		var arr = this.state.entries;
		arr.sort(function(a, b) {
			var ideaA = a.title.toLowerCase(),
				ideaB = b.title.toLowerCase();

			if(ideaA < ideaB) {
				return -1
			}
			if(ideaA > ideaB) {
				return 1
			}
			return 0;
		})
		this.setState({
			entries: arr
		})
	}
	sortByDate() {
		var arr = this.state.entries;
		arr.sort(function(a, b) {
			var ideaA = a.key,
				ideaB = b.key;

			if(ideaA < ideaB) {
				return -1
			}
			if(ideaA > ideaB) {
				return 1
			}
			return 0;
		})
		this.setState({
			entries: arr
		})
	}
		
	render() {
		return(
			<div className='ideaPanel'>
				<div className='ideaPanelHeader'>
					<NewIdeaButton addNew={this.addNew} />
					<SortIdeas sortByAlphabet={this.sortByAlphabet} sortByDate={this.sortByDate} />
					{ this.state.hasListUpdated && <SaveButton /> }
				</div>
				<IdeaList entries={this.state.entries} clearIdea={this.clearIdea} changeInField={this.changeInField} />
			</div>
		);
	}
}