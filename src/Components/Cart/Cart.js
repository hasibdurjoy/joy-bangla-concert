import React from 'react';
import CartBanner from './CartBanner/CartBanner';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let bands = [];
    for (const band of cart) {
        totalPrice = totalPrice + band.hiringPrice;
        bands.push(band);
    }


    return (
        <div className="cart shadow">
            <h4>My Cart</h4>
            <h4>Addeded Item : {cart.length}</h4>
            <h4>Total : ${totalPrice}</h4>
            <h6 className="text-center">My Bands</h6>
            <div>
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