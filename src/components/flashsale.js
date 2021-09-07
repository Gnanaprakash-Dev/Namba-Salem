import React from 'react';
import { Link } from "react-router-dom";
function Flashsale(){
    return(
    <div className="flash-sale-wrapper">
      <div className="container">
        <div className="section-heading d-flex align-items-center justify-content-between">
          <h6 className="me-1 d-flex align-items-center">
            <svg className="bi bi-lightning me-1" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
            </svg>Flash sale
          </h6>
          {/* Please use event time this format: YYYY/MM/DD hh:mm:ss */}
          <ul className="sales-end-timer ps-0 d-flex align-items-center" data-countdown="2022/01/01 14:21:37">
            <li><span className="days">0</span>d</li>
            <li><span className="hours">0</span>h</li>
            <li><span className="minutes">0</span>m</li>
            <li><span className="seconds">0</span>s</li>
          </ul>
        </div>
        {/* Flash Sale Slide*/}
        <div className="flash-sale-slide owl-carousel">
          {/* Single Flash Sale Card*/}
          <div className="card flash-sale-card">
            <div className="card-body"><Link to="/allshops"><img src="img/product/1.png" alt="" /><span className="product-title">Black Table Lamp</span>
                <p className="sale-price">₹7.99<span className="real-price">₹15</span></p><span className="progress-title">33% Sold Out</span>
                {/* Progress Bar*/}
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} />
                </div></Link></div>
          </div>
          {/* Single Flash Sale Card*/}
          <div className="card flash-sale-card">
            <div className="card-body"><Link to="/allshops"><img src="img/product/2.png" alt="" /><span className="product-title">Modern Sofa</span>
                <p className="sale-price">₹14<span className="real-price">₹21</span></p><span className="progress-title">57% Sold Out</span>
                {/* Progress Bar*/}
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '57%'}} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
                </div></Link></div>
          </div>
          {/* Single Flash Sale Card*/}
          <div className="card flash-sale-card">
            <div className="card-body"><Link to="/allshops"><img src="img/product/3.png" alt="" /><span className="product-title">Classic Garden Chair</span>
                <p className="sale-price">₹36<span className="real-price">₹49</span></p><span className="progress-title">99% Sold Out</span>
                {/* Progress Bar*/}
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div></Link></div>
          </div>
          {/* Single Flash Sale Card*/}
          <div className="card flash-sale-card">
            <div className="card-body"><Link to="/allshops"><img src="img/product/1.png" alt="" /><span className="product-title">Black Table Lamp</span>
                <p className="sale-price">₹7.99<span className="real-price">₹15</span></p><span className="progress-title">33% Sold Out</span>
                {/* Progress Bar*/}
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} />
                </div></Link></div>
          </div>
          {/* Single Flash Sale Card*/}
          <div className="card flash-sale-card">
            <div className="card-body"><Link to="/allshops"><img src="img/product/2.png" alt="" /><span className="product-title">Modern Sofa</span>
                <p className="sale-price">₹14<span className="real-price">₹21</span></p><span className="progress-title">57% Sold Out</span>
                {/* Progress Bar*/}
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '57%'}} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
                </div></Link></div>
          </div>
          {/* Single Flash Sale Card*/}
          <div className="card flash-sale-card">
            <div className="card-body"><Link to="/allshops"><img src="img/product/3.png" alt="" /><span className="product-title">Classic Garden Chair</span>
                <p className="sale-price">₹36<span className="real-price">₹49</span></p><span className="progress-title">99% Sold Out</span>
                {/* Progress Bar*/}
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div></Link></div>
          </div>
        </div>
      </div>
    </div>

    );
}

export default Flashsale;