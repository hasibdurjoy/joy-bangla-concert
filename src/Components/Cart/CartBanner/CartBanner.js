import React from 'react';
import './CartBanner.css'

const CartBanner = (props) => {
    /* destructuring from band  */
    const { image, name } = props.band;
    return (
        /* making smallbanner to show item added on cart on click */
        <div className="cart-banner">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={image} class="img-fluid rounded-start cart-image" alt="" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBanner;