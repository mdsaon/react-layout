import React from 'react';

const main1 = (props) => {
	return <div className="main-content-one-area">
				<div className="images">{props.images}</div>
				<h1 className="titles">{props.title}</h1>
				<p className="texts">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
				<button className="btn">Learn More</button>
	</div>
};
export default main1;