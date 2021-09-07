import React from 'react';
import Loader from '../loader';
import Header from '../header';
import Sidebar from '../sidebar';

function Viewshop(){
	return(
         <>
   <Loader />
   <Header />
   <Sidebar />

            <div className="page-content-wrapper pb-3">
            
            <div className="vendor-details-wrap bg-img bg-overlay py-4" style={{backgroundImage: 'url("img/bg-img/15.jpg")'}}>
          <div className="container">
            <div className="d-flex align-items-start">
              {/* Vendor Profile*/}
              <div className="vendor-profile shadow me-3 mt-1">
                <figure className="m-0"><img src="img/core-img/logo-small.png" alt="" /></figure>
              </div>
              {/* Vendor Info*/}
              <div className="vendor-info">
                <h5 className="vendor-title text-white">Suha</h5>
                <p className="mb-1 text-white">
                  <svg className="bi bi-geo-alt me-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>Dhaka, Bangladesh
                </p>
                <div className="ratings lh-1"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><span className="text-white">(99% Positive Seller)</span></div>
              </div>
            </div>
            {/* Vendor Basic Info*/}
            <div className="vendor-basic-info d-flex align-items-center justify-content-between mt-4">
              <div className="single-basic-info">
                <div className="icon">
                  <svg className="bi bi-shield-check" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div><span>Trusted Seller</span>
              </div>
              <div className="single-basic-info">
                <div className="icon">
                  <svg className="bi bi-cart2" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </div><span>100+ Items</span>
              </div>
              <div className="single-basic-info">
                <div className="icon">
                  <svg className="bi bi-truck" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div><span>98% Ship On Time</span>
              </div>
            </div>
          </div>
        </div>
        {/* Vendor Tabs */}
        <div className="vendor-tabs">
          <div className="container">
            <ul className="nav nav-tabs mb-3" id="vendorTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab" aria-controls="products" aria-selected="false">Products</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Ratings &amp; Reviews</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="vendorTabContent">
          <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="container">
              <div className="card">
                <div className="card-body about-content-wrap">
                  <h5>Welcome to our shop gallery.</h5>
                  <p>A versatile e-commerce shop template. It is very nicely designed with modern features &amp; coded with the latest technology.</p>
                  <ul className="mb-3 ps-3">
                    <li className="ps-2"><i className="lni lni-checkmark-circle me-1" />Trusted Seller</li>
                    <li className="ps-2"><i className="lni lni-checkmark-circle me-1" />100+ Items</li>
                    <li className="ps-2"><i className="lni lni-checkmark-circle me-1" />98% Ship On Time</li>
                  </ul>
                  <p>It nicely views on all devices with smartphones, tablets, laptops &amp; desktops.</p><img className="mb-3 rounded" src="img/bg-img/16.jpg" alt="" />
                  <p>A versatile e-commerce shop template. It is very nicely designed with modern features &amp; coded with the latest technology.</p>
                  <p>It nicely views on all devices with smartphones, tablets, laptops &amp; desktops.</p>
                  <h6>Need Help?</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sint reiciendis minima iusto ex beatae.</p>
                  <div className="contact-btn-wrap text-center">
                    <p className="mb-2">For more information, submit a request.</p><a className="btn btn-primary w-100" href="contact.html"><i className="lni lni-life-ring me-2" />Submit A Query</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade show active" id="products" role="tabpanel" aria-labelledby="products-tab">
            <div className="container">
              <div className="row g-3">
                {/* Single Top Product Card */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      {/* Badge*/}<span className="badge rounded-pill badge-warning">Sale</span>
                      {/* Wishlist Button*/}<a className="wishlist-btn" href="#"><i className="lni lni-heart" /></a>
                      {/* Thumbnail */}<a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/11.png" alt="" />
                        {/* Offer Countdown Timer: Please use event time this format: YYYY/MM/DD hh:mm:ss */}
                        <ul className="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2021/12/31 23:59:59">
                          <li><span className="days">0</span>d</li>
                          <li><span className="hours">0</span>h</li>
                          <li><span className="minutes">0</span>m</li>
                          <li><span className="seconds">0</span>s</li>
                        </ul></a>
                      {/* Product Title */}<a className="product-title d-block" href="single-product.html">Beach Cap</a>
                      {/* Product Price */}
                      <p className="sale-price">$13<span>$42</span></p>
                      {/* Rating */}
                      <div className="product-rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                      {/* Add to Cart */}<a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Top Product Card */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      {/* Badge*/}<span className="badge rounded-pill badge-success">New</span>
                      {/* Wishlist Button*/}<a className="wishlist-btn" href="#"><i className="lni lni-heart" /></a>
                      {/* Thumbnail */}<a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/5.png" alt="" /></a>
                      {/* Product Title */}<a className="product-title d-block" href="single-product.html">Wooden Sofa</a>
                      {/* Product Price */}
                      <p className="sale-price">$74<span>$99</span></p>
                      {/* Rating */}
                      <div className="product-rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                      {/* Add to Cart */}<a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Top Product Card */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      {/* Badge*/}<span className="badge rounded-pill badge-success">Sale</span>
                      {/* Wishlist Button*/}<a className="wishlist-btn" href="#"><i className="lni lni-heart" /></a>
                      {/* Thumbnail */}<a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/6.png" alt="" /></a>
                      {/* Product Title */}<a className="product-title d-block" href="single-product.html">Roof Lamp</a>
                      {/* Product Price */}
                      <p className="sale-price">$99<span>$113</span></p>
                      {/* Rating */}
                      <div className="product-rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                      {/* Add to Cart */}<a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Top Product Card */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      {/* Badge*/}<span className="badge rounded-pill badge-danger">-18%</span>
                      {/* Wishlist Button*/}<a className="wishlist-btn" href="#"><i className="lni lni-heart" /></a>
                      {/* Thumbnail */}<a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/9.png" alt="" />
                        {/* Offer Countdown Timer: Please use event time this format: YYYY/MM/DD hh:mm:ss */}
                        <ul className="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2021/11/23 23:21:29">
                          <li><span className="days">0</span>d</li>
                          <li><span className="hours">0</span>h</li>
                          <li><span className="minutes">0</span>m</li>
                          <li><span className="seconds">0</span>s</li>
                        </ul></a>
                      {/* Product Title */}<a className="product-title d-block" href="single-product.html">Sneaker Shoes</a>
                      {/* Product Price */}
                      <p className="sale-price">$87<span>$92</span></p>
                      {/* Rating */}
                      <div className="product-rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                      {/* Add to Cart */}<a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Top Product Card */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      {/* Badge*/}<span className="badge rounded-pill badge-danger">-11%</span>
                      {/* Wishlist Button*/}<a className="wishlist-btn" href="#"><i className="lni lni-heart" /></a>
                      {/* Thumbnail */}<a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/8.png" alt="" /></a>
                      {/* Product Title */}<a className="product-title d-block" href="single-product.html">Wooden Chair</a>
                      {/* Product Price */}
                      <p className="sale-price">$21<span>$25</span></p>
                      {/* Rating */}
                      <div className="product-rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                      {/* Add to Cart */}<a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Top Product Card */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card product-card">
                    <div className="card-body">
                      {/* Badge*/}<span className="badge rounded-pill badge-warning">On Sale</span>
                      {/* Wishlist Button*/}<a className="wishlist-btn" href="#"><i className="lni lni-heart" /></a>
                      {/* Thumbnail */}<a className="product-thumbnail d-block" href="single-product.html"><img className="mb-2" src="img/product/4.png" alt="" /></a>
                      {/* Product Title */}<a className="product-title d-block" href="single-product.html">Polo Shirts</a>
                      {/* Product Price */}
                      <p className="sale-price">$38<span>$41</span></p>
                      {/* Rating */}
                      <div className="product-rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                      {/* Add to Cart */}<a className="btn btn-success btn-sm" href="#"><i className="lni lni-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
            {/* Rating & Review Wrapper */}
            <div className="rating-and-review-wrapper bg-white py-3 mb-3">
              <div className="container">
                <div className="rating-review-content">
                  <ul className="ps-0">
                    {/* Single User Review */}
                    <li className="single-user-review d-flex">
                      <div className="user-thumbnail"><img src="img/bg-img/7.jpg" alt="" /></div>
                      <div className="rating-comment">
                        <div className="rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                        <p className="comment mb-0">Very good product. It's just amazing!</p><span className="name-date">Designing World 12 Dec 2021</span><a className="review-image mt-2 border rounded" href="img/product/3.png"><img className="rounded-3" src="img/product/3.png" alt="" /></a>
                      </div>
                    </li>
                    {/* Single User Review */}
                    <li className="single-user-review d-flex">
                      <div className="user-thumbnail"><img src="img/bg-img/8.jpg" alt="" /></div>
                      <div className="rating-comment">
                        <div className="rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                        <p className="comment mb-0">Very excellent product. Love it.</p><span className="name-date">Designing World 8 Dec 2021</span><a className="review-image mt-2 border rounded" href="img/product/4.png"><img className="rounded-3" src="img/product/4.png" alt="" /></a><a className="review-image mt-2 border rounded" href="img/product/6.png"><img className="rounded-3" src="img/product/6.png" alt="" /></a>
                      </div>
                    </li>
                    {/* Single User Review */}
                    <li className="single-user-review d-flex">
                      <div className="user-thumbnail"><img src="img/bg-img/9.jpg" alt="" /></div>
                      <div className="rating-comment">
                        <div className="rating"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /></div>
                        <p className="comment mb-0">What a nice product it is. I am looking it's.</p><span className="name-date">Designing World 28 Nov 2021</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Ratings Submit Form*/}
            <div className="ratings-submit-form bg-white py-3">
              <div className="container">
                <h6>Submit A Review</h6>
                <form action="#" method>
                  <div className="stars mb-3">
                    <input className="star-1" type="radio" name="star" id="star1" />
                    <label className="star-1" htmlFor="star1" />
                    <input className="star-2" type="radio" name="star" id="star2" />
                    <label className="star-2" htmlFor="star2" />
                    <input className="star-3" type="radio" name="star" id="star3" />
                    <label className="star-3" htmlFor="star3" />
                    <input className="star-4" type="radio" name="star" id="star4" />
                    <label className="star-4" htmlFor="star4" />
                    <input className="star-5" type="radio" name="star" id="star5" />
                    <label className="star-5" htmlFor="star5" /><span />
                  </div>
                  <textarea className="form-control mb-3" id="comments" name="comment" cols={30} rows={10} data-max-length={200} placeholder="Write your review..." defaultValue={""} />
                  <button className="btn btn-sm btn-primary" type="submit">Save Review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

         </>  
		);
}

export default Viewshop;