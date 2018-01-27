import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import IdeaPanel from './ideaPanel';

export default class App extends Component {
	render() {
		return(
			<div className='ideaBoard'>
				<Header />
				<IdeaPanel />
			</div>
		);
	}
}