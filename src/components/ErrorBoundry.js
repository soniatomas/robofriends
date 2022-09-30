import React, { Component } from 'react';

/*
ErrorBoundry: class to catch errors in components and display an error message.
This class is wrapped around a component such as CardList or Card, to catch 
an error within these components and display an error message. 
*/

class ErrorBoundry extends Component {
	// the props are used to allow access to this.props in the constructor
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	// if this lifecycle method is ever triggered, the render method is triggered
	// and renders the error message. 
	componentDidCatch(error, info) {
		this.setState({ hasError: true})
	}

	render() {
		// if an error exists, render error message
		if (this.state.hasError) {
			return <h1>ooof. Something isnt right :(</h1>
		}
		// else render the children
		return this.props.children
	}
}

export default ErrorBoundry;
