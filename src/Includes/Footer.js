import React from 'react';
import FooterDetails from '../Includes/FooterDetails';
import FooterInfos from '../Includes/FooterInfos';

const footer = () => {
	return <div className="footer">
		<div className="clip-path-button-footer">
			<h2>CREATE A POWERFUL SOLUTION NOW!</h2>
			<button>GET STARTED</button>
		</div>
		<div className="footer-details">
			<FooterDetails title="ABOUT US"/>
			<FooterDetails title="LATEST TWEETS"/>
			<FooterDetails title="LATEST POSTS"/>
			<FooterDetails title="FLICKER"/>
		</div>
		<div className="footer-info">
			<FooterInfos info="Copyright@1991-2018.All RIGHTS RESERVED"/>
		</div>

	</div>
};
export default footer;