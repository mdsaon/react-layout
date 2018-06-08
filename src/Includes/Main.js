import React from 'react';
import Main1 from '../Includes/Main1';
import Main2 from '../Includes/Main2';
import Main3 from '../Includes/Main3';
import BorderBG from '../Images/BorderBG.jpg';


const main = () => {
	return <div className="main-content">
		<div className="main-content-one">
			<Main1 title="SUPERBLY RESPONSIVE" images="fas fa-user"/>
			<Main1 title="SQUEEKY CLEAN" images="image2" />
			<Main1 title="MULTI PURPOSE" images="image3"  />
			<Main1 title="HIGHLY FLEXIBLE" images="image4" />
		</div>
		<div className="main-content-two">

			<Main2 title="Blog Title" texts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
			<Main2 title="Blog Title" texts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
			<Main2 title="Blog Title" texts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
		</div>
		<div className="main-content-three">

			<div className="section-two">	
				<Main3 title="John Smith" texts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
				<Main3 title="John Smith" texts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
				<Main3 title="John Smith" texts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
				<Main3 title="John Smith" texts="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
		    </div>
		    <div className="section-three">
		     <Main3 title="John Smith" 
		     texts="Lorem Ipsum is simply dummy text of the 
		     printing and typesetting industry. Lorem Ipsum has been the industry's
		      standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's
		      standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's
		      standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's
		      standard dummy text ever since the 1500sLorem Ipsum has been the industry's
		      standard dummy text ever since the 1500s"/>
		    </div> 		
		</div>
	</div>
};
export default main;