import  React from 'react';
import { Link } from "react-router-dom";
function Bestcollection(){
	return(
        <div className="container py-3">
      <div className="section-heading d-flex align-items-center justify-content-between p">
        <h6>Collections</h6><Link to="/allshops" className="btn">View All</Link>
      </div>
      {/* Collection Slide*/}
      <div className="collection-slide owl-carousel">
        {/* Collection Card*/}
        <div className="card collection-card"><Link to="/allshops" ><img src="img/product/17.jpg" alt="" /></Link>
          <div className="collection-title"><span>Women</span><span>9 new items</span></div>
        </div>
        {/* Collection Card*/}
        <div className="card collection-card"><Link to="/allshops" ><img src="img/product/19.jpg" alt="" /></Link>
          <div className="collection-title"><span>Men</span><span>29 items</span></div>
        </div>
        {/* Collection Card*/}
        <div className="card collection-card"><Link to="/allshops"><img src="img/product/21.jpg" alt="" /></Link>
          <div className="collection-title"><span>Kids</span><span>4 new items</span></div>
        </div>
        {/* Collection Card*/}
        <div className="card collection-card"><Link to="/allshops" ><img src="img/product/22.jpg" alt="" /></Link>
          <div className="collection-title"><span>Gadget</span><span>11 items</span></div>
        </div>
        {/* Collection Card*/}
        <div className="card collection-card"><Link to="/allshops"><img src="img/product/23.jpg" alt="" /></Link>
          <div className="collection-title"><span>Foods</span><span>2 new items</span></div>
        </div>
        {/* Collection Card*/}
        <div className="card collection-card"><Link to="/allshops"><img src="img/product/24.jpg" alt="" /></Link>
          <div className="collection-title"><span>Sports</span><span>5 items</span></div>
        </div>
      </div>
      <div className="pb-3" />
    </div>
		);
	}
	export default Bestcollection;