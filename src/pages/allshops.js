import React from 'react';
import Loader from '../components/loader';
import Header from '../components/header';
import Sidebar from '../components/sidebar';


function Allshops() {
  return (
 <>
   <Loader />
   <Header />
   <Sidebar />
    <div className="page-content-wrapper py-3">
        <div className="container">
          <div className="row gy-3">
            <div className="col-12">
              {/* Single Vendor */}
              <div className="single-vendor-wrap bg-img p-4 bg-overlay" style={{backgroundImage: 'url("img/bg-img/12.jpg")'}}>
                <h5 className="vendor-title text-white">Designing World</h5>
                <div className="vendor-info">
                  <p className="mb-1 text-white">
                    <svg className="bi bi-geo-alt me-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>Dhaka, Bangladesh
                  </p>
                  <div className="ratings lh-1"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><span className="text-white">(99% Positive Seller)</span></div>
                </div><a className="btn btn-warning btn-sm mt-3" href="vendor-shop.html">Go To Store
                  <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg></a>
                {/* Vendor Profile*/}
                <div className="vendor-profile shadow">
                  <figure className="m-0"><img src="img/product/dw.png" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Single Vendor */}
              <div className="single-vendor-wrap bg-img p-4 bg-overlay" style={{backgroundImage: 'url("img/bg-img/16.jpg")'}}>
                <h5 className="vendor-title text-white">Stylie Wear</h5>
                <div className="vendor-info">
                  <p className="mb-1 text-white">
                    <svg className="bi bi-geo-alt me-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>Dhaka, Bangladesh
                  </p>
                  <div className="ratings lh-1"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><span className="text-white">(99% Positive Seller)</span></div>
                </div><a className="btn btn-warning btn-sm mt-3" href="vendor-shop.html">Go To Store
                  <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg></a>
                {/* Vendor Profile*/}
                <div className="vendor-profile shadow">
                  <figure className="m-0"><img src="img/product/stylie.png" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Single Vendor */}
              <div className="single-vendor-wrap bg-img p-4 bg-overlay" style={{backgroundImage: 'url("img/bg-img/14.jpg")'}}>
                <h5 className="vendor-title text-white">Suha</h5>
                <div className="vendor-info">
                  <p className="mb-1 text-white">
                    <svg className="bi bi-geo-alt me-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>Dhaka, Bangladesh
                  </p>
                  <div className="ratings lh-1"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><span className="text-white">(99% Positive Seller)</span></div>
                </div><a className="btn btn-warning btn-sm mt-3" href="vendor-shop.html">Go To Store
                  <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg></a>
                {/* Vendor Profile*/}
                <div className="vendor-profile shadow">
                  <figure className="m-0"><img src="img/core-img/logo-small.png" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Single Vendor */}
              <div className="single-vendor-wrap bg-img p-4 bg-overlay" style={{backgroundImage: 'url("img/bg-img/15.jpg")'}}>
                <h5 className="vendor-title text-white">Affan</h5>
                <div className="vendor-info">
                  <p className="mb-1 text-white">
                    <svg className="bi bi-geo-alt me-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>Dhaka, Bangladesh
                  </p>
                  <div className="ratings lh-1"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><span className="text-white">(99% Positive Seller)</span></div>
                </div><a className="btn btn-warning btn-sm mt-3" href="vendor-shop.html">Go To Store
                  <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg></a>
                {/* Vendor Profile*/}
                <div className="vendor-profile shadow">
                  <figure className="m-0"><img src="img/product/affan.png" alt="" /></figure>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Single Vendor */}
              <div className="single-vendor-wrap bg-img p-4 bg-overlay" style={{backgroundImage: 'url("img/bg-img/17.jpg")'}}>
                <h5 className="vendor-title text-white">News Ten</h5>
                <div className="vendor-info">
                  <p className="mb-1 text-white">
                    <svg className="bi bi-geo-alt me-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>Dhaka, Bangladesh
                  </p>
                  <div className="ratings lh-1"><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><i className="lni lni-star-filled" /><span className="text-white">(99% Positive Seller)</span></div>
                </div><a className="btn btn-warning btn-sm mt-3" href="vendor-shop.html">Go To Store
                  <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg></a>
                {/* Vendor Profile*/}
                <div className="vendor-profile shadow">
                  <figure className="m-0"><img src="img/product/newsten.png" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
 </>
  );
}

export default Allshops;