import React from 'react';
import Loader from '../loader';
import Header from '../header';
import Sidebar from '../sidebar';

function Bag(){
   return(
        <>
   <Loader />
   <Header />
   <Sidebar />

    <div className="page-content-wrapper">
        <div className="container">
          {/* Cart Wrapper*/}
          <div className="cart-wrapper-area py-3">
            <div className="cart-table card mb-3">
              <div className="table-responsive card-body">
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <th scope="row"><a className="remove-product" href="#"><i className="lni lni-close" /></a></th>
                      <td><img className="rounded" src="img/product/11.png" alt="" /></td>
                      <td><a href="single-product.html">Ciramic Pot Set<span>$12.10 × 1</span></a></td>
                      <td>
                        <div className="quantity">
                          <input className="qty-text" type="text" defaultValue={1} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"><a className="remove-product" href="#"><i className="lni lni-close" /></a></th>
                      <td><img className="rounded" src="img/product/14.png" alt="" /></td>
                      <td><a href="single-product.html">Bluetooth Speaker<span>$9.87 × 2</span></a></td>
                      <td>
                        <div className="quantity">
                          <input className="qty-text" type="text" defaultValue={2} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"><a className="remove-product" href="#"><i className="lni lni-close" /></a></th>
                      <td><img className="rounded" src="img/product/10.png" alt="" /></td>
                      <td><a href="single-product.html">Modern Gray Tops<span>$7 × 1</span></a></td>
                      <td>
                        <div className="quantity">
                          <input className="qty-text" type="text" defaultValue={1} />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Coupon Area*/}
            <div className="card coupon-card mb-3">
              <div className="card-body">
                <div className="apply-coupon">
                  <h6 className="mb-0">Have a coupon?</h6>
                  <p className="mb-2">Enter your coupon code here &amp; get awesome discounts!</p>
                  <div className="coupon-form">
                    <form action="#">
                      <input className="form-control" type="text" placeholder="SUHA30" />
                      <button className="btn btn-primary" type="submit">Apply</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Cart Amount Area*/}
            <div className="card cart-amount-area">
              <div className="card-body d-flex align-items-center justify-content-between">
                <h5 className="total-price mb-0">$<span className="counter">38.84</span></h5><a className="btn btn-warning" href="checkout.html">Checkout Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      );
}
export default Bag;




