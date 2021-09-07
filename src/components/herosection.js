import React from 'react';
import './herosection.css';
function Herosection(){
	return( 
	    <div className="hero">
              <video src="/videos/salem1.mp4" id="video" type="video/mp4" controls/>
            <div className="container">
              <div className="display-flex">
               <i className="fa fa-search" aria-hidden="true"></i>
               <input type="text" name="text" placeholder="Search Your Shops" />
              </div>
            </div>
         </div>
         );
}
export default Herosection;
