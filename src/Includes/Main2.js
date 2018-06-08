import React from 'react';
import imgplaceholder from '../Images/imgplaceholder.png';

const main2 = (props) => {
	return <div className="main-content-two-area">
		<img src={imgplaceholder} alt="Header Image" width="300px" height="200px" />
		<div className="info-area">
			<h1>{props.title}</h1>
			<p>{props.texts}</p>
		</div>
	</div>
};
export default main2;