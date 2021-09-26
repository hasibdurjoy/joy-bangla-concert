import React from 'react';
import './CartBanner.css'

const CartBanner = (props) => {
    /* destructuring from band  */
    const { image, name } = props.band;
    return (
        /* making smallbanner to show item added on cart on click */
        <div className="cart-banner">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start cart-image" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBanner;