import React from 'react';

const Card = ({name, email, id}) => {

	// the photo src is a custom api by Andrei
	// used tachyons to prettify the card html
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
			<img alt='photo' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;