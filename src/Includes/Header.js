import React from 'react';
import Headerimg from '../Images/Headerimg.png';

const header = () => {
	return <div className="header">
		<img src={Headerimg} alt="Header Image" width="500px" height="300px" />
		<div className="header-title">
			<h2><span>POWERFULLY SIMPLE</span> WITH A <br /><span>SQUEEKY CLEAN </span>DESIGN.</h2>
			<p>Find out how you can offer quick and powerful<br/>solutions to your customers now!</p>
			<button className="btn">LEARN MORE</button>
		</div>
		<div className="clip-path-button">
			<h2>CREATE A POWERFUL SOLUTION NOW!</h2>
			<button>GET STARTED</button>
		</div>
	</div>
};
export default header;