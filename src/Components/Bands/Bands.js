import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';

const Bands = () => {
    const [bands, setBands] = useState([]);
    useEffect(() => {
        fetch('bands.json')
            .then(res => res.json())
            .then(data => setBands(data))
    }, []);
    return (
        <div className="bands-container container row row-cols-1 row-cols-md-3 g-4">
            {
                bands.map(band => <Band key={band.id} band={band}></Band>)
            }
        </div>
    );
};

export default Bands;