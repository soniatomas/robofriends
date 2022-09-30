import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
//import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super();
		// the state is what changes in an app, it is what allows an app
		// to be dynamic. In our app, the searchfield value changes
		// and the robots to display changes. 
		// Either all the robots are displayed or only the robots 
		// matching the name inputted in the searchfield are displayed. 
		this.state ={
			robots: [],
			searchfield: ''
		}
	}
// method queries users from api
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

// IMPORTANT: Using this type of function notation is important 
// in order to maintain the value of the keyword this to the app object,
// not the the SearchBox object. The previous explanation was probably 
// confusing but it is what is making the app work. 
// this is exactly how andrei explained it. 
	onSearchChange = (event) => {
		// IMPORTANT: use the method below to change the value of state.
		// this is the only way to do it, you cannot assign values to 
		// the properties of state using traditional assignment
		// Anytime you change the values of state, you have to use the method below
		this.setState({searchfield : event.target.value})
		
	}

	render() {
		// get the name of the robot to display and filter out any robots
		// for the robot list that do not match it. 
		const filteredRobot = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		// The if statement below is used in case it takes too long to query
		// a long list of robots.
		// if no robots are loaded, then display a loading message,
		// else display the robots. 

		if (!this.state.robots.length) {
			return (<h1>loading</h1>)
		} else {
			// Display the list of robots or display the robots that match
			// the name that was typed in the search field. 
			// CardList enclosed in an ErrorBoundry.
			// If anything in our CardList fails, ErrorBoundry is going to catch it
			// and display an error message.
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange = { this.onSearchChange }/>
					<Scroll> 
						<ErrorBoundry>
							<CardList robots = {filteredRobot}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);

		}
	}
}

export default App;