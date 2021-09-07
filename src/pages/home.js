import React from 'react';
import Sidebar from '../components/sidebar';
import Maincatefory from '../components/maincategory';
import Flashsale from '../components/flashsale';
import Ladds from '../components/ladds';
import Sadds from '../components/sadds';
import Bestcollection  from '../components/bestcollection';
import { Link } from "react-router-dom";

function Home() {
  return (
<>
<Sidebar />
  <div className="page-content-wrapper">
  <Maincatefory />
  <Flashsale />
 <div className="weekly-best-seller-area py-3">
        <div className="container">
          <div className="section-heading d-flex align-items-center justify-content-between">
            <h6>Weekly Best Sellers</h6>
            <Link to="/allshops" className="btn" href="shop-list.html">View All</Link>
          </div>
          <div className="row g-3">
            {/* Single Weekly Product Card */}
            <div className="col-12 col-md-6">
              <div className="card horizontal-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    {/* Badge */}
                    <span className="badge badge-success">Sale</span>
                    {/* Wishlist Button */}
                    <Link to="/allshops" className="wishlist-btn" ><i className="lni lni-shopping-basket" /></Link>
                    {/* Thumbnail */}
                    <Link to="/allshops" className="product-thumbnail d-block" >
                    <img src="img/product/10.png" alt="" />
                    </Link>
                  </div>
                  <div className="product-description">
                    {/* Product Title */}
                    <Link to="/allshops" className="product-title d-block" >Modern Sofa</Link>
                    {/* Price */}
                    <p className="sale-price"><i className="lni lni-dollar" />₹64<span>₹89</span></p>
                    {/* Rating */}
                    <div className="product-rating"><i className="lni lni-star-filled" />4.88 (39)</div>
                    {/* Buy Now Button */}
                    <Link to="/allshops" className="btn btn-danger btn-sm"><i className="me-1 lni lni-cart-full" />Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Weekly Product Card */}
            <div className="col-12 col-md-6">
              <div className="card horizontal-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    {/* Badge */}<span className="badge badge-primary">Sale</span>
                    {/* Wishlist Button */}
                    <Link to="/allshops" className="wishlist-btn"><i className="lni lni-shopping-basket" /></Link>
                    {/* Thumbnail */}
                    <Link to="/allshops" className="product-thumbnail d-block" ><img src="img/product/7.png" alt="" /></Link>
                  </div>
                  <div className="product-description">
                    {/* Product Title */}
                    <Link to="/allshops" className="product-title d-block" >Office Chair</Link>
                    {/* Price */}
                    <p className="sale-price"><i className="lni lni-dollar" />₹100<span>₹160</span></p>
                    {/* Rating */}
                    <div className="product-rating"><i className="lni lni-star-filled" />4.82 (125)</div>
                    {/* Buy Now Button */}
                    <Link to="/allshops" className="btn btn-danger btn-sm" ><i className="me-1 lni lni-cart-full" />Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Weekly Product Card */}
            <div className="col-12 col-md-6">
              <div className="card horizontal-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    {/* Badge */}<span className="badge badge-danger">-10%</span>
                    {/* Wishlist Button */}
                    <Link to="/allshops" className="wishlist-btn" ><i className="lni lni-shopping-basket" /></Link>
                    {/* Thumbnail */}
                    <Link to="/allshops" className="product-thumbnail d-block" ><img src="img/product/12.png" alt="" />
                      {/* Offer Countdown Timer: Please use event time this format: YYYY/MM/DD hh:mm:ss */}
                      <ul className="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2022/12/09 23:59:59">
                        <li><span className="days">0</span>d</li>
                        <li><span className="hours">0</span>h</li>
                        <li><span className="minutes">0</span>m</li>
                        <li><span className="seconds">0</span>s</li>
                      </ul>
                      </Link>
                  </div>
                  <div className="product-description">
                    {/* Product Title */}
                    <Link to="/allshops" className="product-title d-block" >Sun Glasses</Link>
                    {/* Price */}
                    <p className="sale-price"><i className="lni lni-dollar" />₹24<span>₹32</span></p>
                    {/* Rating */}
                    <div className="product-rating"><i className="lni lni-star-filled" />4.79 (63)</div>
                    {/* Buy Now Button */}
                    <Link to="/allshops" className="btn btn-danger btn-sm" ><i className="me-1 lni lni-cart-full" />Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Weekly Product Card */}
            <div className="col-12 col-md-6">
              <div className="card horizontal-product-card">
                <div className="card-body d-flex align-items-center">
                  <div className="product-thumbnail-side">
                    {/* Badge */}<span className="badge badge-warning">New</span>
                    {/* Wishlist Button */}
                    <Link to="/allshops" className="wishlist-btn" ><i className="lni lni-shopping-basket" /></Link>
                    {/* Thumbnail */}
                    <Link to="/allshops" className="product-thumbnail d-block" ><img src="img/product/13.png" alt="" /></Link>
                  </div>
                  <div className="product-description">
                    {/* Product Title */}
                    <Link to="/allshops" className="product-title d-block" >Wall Clock</Link>
                    {/* Price */}
                    <p className="sale-price"><i className="lni lni-dollar" />₹31<span>₹47</span></p>
                    {/* Rating */}
                    <div className="product-rating"><i className="lni lni-star-filled" />4.99 (7)</div>
                    {/* Buy Now Button */}
                    <Link to="/allshops" className="btn btn-danger btn-sm" ><i className="me-1 lni lni-cart-full" />Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  <Ladds />

  <div className="featured-products-wrapper py-3 ">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between">
          <h6>Featured Products</h6>
          <Link to="/allshops" className="btn" >View All</Link>
        </div>
        <div className="row g-3">
          {/* Featured Product Card*/}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card featured-product-card">
              <div className="card-body">
                {/* Badge*/}<span className="badge badge-warning custom-badge"><i className="lni lni-star" /></span>
                <div className="product-thumbnail-side">
                  {/* Wishlist Button */}
                  <Link to="/allshops" className="wishlist-btn shadow-sm border"><i className="lni lni-shopping-basket" /></Link>
                  {/* Thumbnail */}
                  <Link to="/allshops" className="product-thumbnail d-block" ><img src="img/product/14.png" alt="" /></Link>
                </div>
                <div className="product-description">
                  {/* Product Title */}
                  <Link to="/allshops" className="product-title d-block" >Blue Skateboard</Link>
                  {/* Price */}
                  <p className="sale-price">₹39.8<span>₹89</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Product Card*/}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card featured-product-card">
              <div className="card-body">
                {/* Badge*/}<span className="badge badge-warning custom-badge"><i className="lni lni-star" /></span>
                <div className="product-thumbnail-side">
                  {/* Wishlist Button */}
                  <Link to="/allshops" className="wishlist-btn shadow-sm border"><i className="lni lni-shopping-basket" /></Link>
                  {/* Thumbnail */}
                  <Link to="/allshops" className="product-thumbnail d-block" ><img src="img/product/15.png" alt="" /></Link>
                </div>
                <div className="product-description">
                  {/* Product Title */}
                  <Link to="/allshops" className="product-title d-block" >Travel Bag</Link>
                  {/* Price */}
                  <p className="sale-price">₹14.7<span>₹21</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Product Card*/}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card featured-product-card">
              <div className="card-body">
                {/* Badge*/}<span className="badge badge-warning custom-badge"><i className="lni lni-star" /></span>
                <div className="product-thumbnail-side">
                  {/* Wishlist Button */}
                  <Link to="/allshops" className="wishlist-btn shadow-sm border" ><i className="lni lni-shopping-basket" /></Link>
                  {/* Thumbnail */}
                  <Link to="/allshops" className="product-thumbnail d-block" ><img src="img/product/16.png" alt="" /></Link>
                </div>
                <div className="product-description">
                  {/* Product Title */}
                  <Link to="/allshops" className="product-title d-block" >Cotton T-shirts</Link>
                  {/* Price */}
                  <p className="sale-price">₹3.69<span>₹5</span></p>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Product Card*/}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card featured-product-card">
              <div className="card-body">
                {/* Badge*/}
                <span className="badge badge-warning custom-badge"><i className="lni lni-star" /></span>
                <div className="product-thumbnail-side">
                  {/* Wishlist Button */}
                  <Link to="/allshops" className="wishlist-btn shadow-sm border" ><i className="lni lni-shopping-basket" /></Link>
                  {/* Thumbnail */}
                  <Link to="/allshops" className="product-thumbnail d-block" ><img src="img/product/6.png" alt="" /></Link>
                </div>
                <div className="product-description">
                  {/* Product Title */}
                  <Link to="/allshops" className="product-title d-block" >Roof Lamp</Link>
                  {/* Price */}
                  <p className="sale-price">₹27.9<span>₹31</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Sadds />
  <Bestcollection /> 
</div> 

</>
  );
}

export default Home;