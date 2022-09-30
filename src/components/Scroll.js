import React from 'react';

/* the children below is the CardList of robots */
const Scroll = (props) => {
	return (
		// some styles are written differently in JSX than is CSS
		// for example in JSX it is 'overflowY' , not 'overflow-y' like in CSS
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;
