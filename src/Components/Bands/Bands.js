import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import './Bands.css'
const Bands = () => {
    const [bands, setBands] = useState([]);
    useEffect(() => {
        fetch('bands.json')
            .then(res => res.json())
            .then(data => setBands(data))
    }, []);
    return (
        <div className="concert-container">
            <div className="bands-container">
                <div className="bands-container container row row-cols-1 row-cols-md-3 g-4">
                    {
                        bands.map(band => <Band key={band.id} band={band}></Band>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h4>My Cart</h4>
            </div>
        </div>

    );
};

export default Bands;