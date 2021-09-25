import React from 'react';

const Cart = (props) => {
    console.log(props);
    const { cart } = props;
    let totalPrice = 0;
    let bands = [];
    for (const band of cart) {
        totalPrice = totalPrice + band.hiringPrice;
        bands.push(band);
    }


    return (
        <div>
            <h4>My Cart</h4>
            <h4>Addeded Item : {cart.length}</h4>
            <h4>Total : {totalPrice}</h4>
            {
                bands.map(band => <p key={band.id}>{band.name}</p>)
            }
        </div>
    );
};

export default Cart;