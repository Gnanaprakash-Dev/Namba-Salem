import React from 'react';
import { Link } from "react-router-dom";
function Ladds(){
	return(
		<>
	<div className="cta-area">
      <div className="container">
        <div className="cta-text p-4 p-lg-5" style={{backgroundImage: 'url(img/bg-img/24.jpg)'}}>
          <h4 className="text-white">On Sale 50% Off!</h4>
          <p className="text-white">Suha is a multipurpose, creative &amp; <br />modern mobile template.</p><Link to="/allshops" className="btn btn-warning">Shop Today</Link>
        </div>
      </div>
    </div>
    </>
);
}
export default Ladds;