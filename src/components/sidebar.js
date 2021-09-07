import React from 'react';
import { Link } from "react-router-dom";
function Sidebar(){
    return(
       <div className="offcanvas offcanvas-start suha-offcanvas-wrap" tabIndex={-1} id="suhaOffcanvas" aria-labelledby="suhaOffcanvasLabel">
            {/* Close button*/}
            
             {/*<li className="lni lni-close" id="close" data-bs-dismiss="offcanvas" aria-label="Close"/>*/}
            {/* Offcanvas body*/}
            <div className="offcanvas-body">
                {/* Sidenav Profile*/}
                <div className="sidenav-profile">
                <div className="user-profile"><img src="img/bg-img/logo.png" alt="" /></div>
                <div className="user-info">
                    <h6 className="user-name mb-1">Namba Salem</h6>
                    <p className="available-balance">Welcome Back</p>
                </div>
                </div>
                {/* Sidenav Nav*/}
                <ul className="sidenav-nav ps-0">
                <li><Link to="/allshops"><i className="lni lni-user" />My Profile</Link></li>
                <li><Link to="/allshops"><i className="lni lni-alarm lni-tada-effect" />Notifications<span className="ms-3 badge badge-warning">3</span></Link></li>
                <li><Link to="/allshops"><i className="lni lni-cart" />All Shops</Link></li>
                <li><Link to="/allshops"><i className="lni lni-search" />Search</Link></li>
                <li><Link to="/allshops"><i className="lni lni-shopping-basket" />My Cart</Link></li>
                <li><Link to="/allshops"><i className="lni lni-cog" />Settings</Link></li>
                <li><Link to="/allshops"><i className="lni lni-power-switch" />Sign Out</Link></li>
                </ul>
            </div>
     </div>

    );
}

export default Sidebar;