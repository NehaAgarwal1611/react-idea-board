import React, {Component} from 'react';

export default class SortIdeas extends Component {
	constructor(props) {
		super(props);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}
	handleSelectChange(e) {
		if(e.target.value === '1') {
			this.props.sortByDate()
		} else if (e.target.value === '2') {
			this.props.sortByAlphabet()
		}
	}
	render() {
		return(
			<form className='sort'>
				<label>Sort Ideas By: </label>
				<select onChange={(e) => {this.handleSelectChange(e)}}>
					<option value="1">Date Created</option>
					<option value="2">Alphabetically</option>
				</select>
			</form>
		);
	}
}