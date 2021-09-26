import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import './Bands.css'

const Bands = () => {
    // fetch data from json 
    const [bands, setBands] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bands.json')
            .then(res => res.json())
            .then(data => setBands(data))
    }, []);

    // handle add to cart function 
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="concert-container">
            <div className="bands-container">
                <div className="container row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {/* using loop and calling band component with passing band data  */}
                    {
                        bands.map(band => <Band
                            key={band.id}
                            band={band}
                            handleAddToCart={handleAddToCart}
                        >

                        </Band>)
                    }
                </div>
            </div>
            {/* calling cart component with parameter cart  */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Bands;