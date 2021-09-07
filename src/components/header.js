import React from 'react';

function Header(){
	return(
    <div>
  {/* Header Area*/}
  <div className="header-area" id="headerArea">
    <div className="container h-100 d-flex align-items-center justify-content-between">
      {/* Logo Wrapper*/}
      <div className="logo-wrapper"><a href="home.html"><img src="img/core-img/logo-small.png" alt="" /></a></div>
      {/* Search Form*/}
      <div className="top-search-form">
        <form action="#" method>
          <input className="form-control" type="search" placeholder="Enter your keyword" />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>
      </div>
      {/* Navbar Toggler*/}
      <div className="suha-navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas"><span /><span /><span /></div>
    </div>
  </div>
</div>
 );

}

export default Header;