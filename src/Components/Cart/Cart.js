import React from 'react';
import CartBanner from './CartBanner/CartBanner';
import './Cart.css'

const Cart = (props) => {

    /* calculating cart item and totals */
    const { cart } = props;
    let totalPrice = 0;
    let bands = [];
    for (const band of cart) {
        totalPrice = totalPrice + band.hiringPrice;
        /* seeting band again to make loop again and show name and image */
        bands.push(band);
    }


    return (
        /* showing cart  */
        <div className="cart shadow">
            <h4 className="text-center cart-text">My Cart</h4>
            <h5 className="cart-text">Total Band : {cart.length}</h5>
            <h4 className="cart-text">Total: ${totalPrice}</h4>
            <h6 className="text-center cart-text">My Bands</h6>
            <div>
                {/* loop and call CartBanner to show image and name in cart  */}
                {
                    bands.map(band => <CartBanner key={band.id} band={band}></CartBanner>)
                }
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success">Confirm</button>
            </div>
        </div>
    );
};

export default Cart;