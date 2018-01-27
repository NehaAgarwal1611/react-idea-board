import React, {Component} from 'react';

export default class SortIdeas extends Component {
	render() {
		return(
			<form className='sort'>
				<label>Sort Ideas By: </label>
				<select>
					<option>Date Created</option>
					<option>Alphabetically</option>
				</select>
			</form>
		);
	}
}