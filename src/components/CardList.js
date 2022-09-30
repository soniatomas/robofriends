import React from 'react';
import Card from './Card';

// CardList returns a list of Cards containing friends

const CardList = ({robots}) => {
	// this if statement is only used for throwing an error for ErrorBoundry
	/*
	if (true) {
		throw new Error('ooops!');
	}
	*/
	// Create list of Card objects for each robot
	// in the robots list. 
	// Return the cardList of Card objects
	return (
		<div>
	      {
	      	robots.map((user, idx) => {
				return (
					<Card 
						key={idx} 
						id={robots[idx].id} 
						name={robots[idx].name} 
						email={robots[idx].email}/>
				)
			})
	      }
	    </div>
	);
}

export default CardList;
