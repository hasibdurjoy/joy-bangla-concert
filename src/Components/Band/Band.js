import React from 'react';
import './Band.css'

const Band = (props) => {
    const { name, member, leadVocal, founded, origin, genres, hiringPrice, image, facebook, wikipidea } = props.band;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Name : {name}</h5>
                        <h6 className="card-title"><small>Genres : {genres}</small></h6>
                        <h6 className="card-title"><small>Origin : {origin}</small></h6>
                        <h6 className="card-title"><small>Total Member : {member}</small></h6>
                        <h6 className="card-title"><small>Lead Vocal : {leadVocal}</small></h6>
                        <h6 className="card-title"><small>Established in : {founded}</small></h6>
                        <h3 className="card-title">Hiring Price : {hiringPrice}</h3>
                        <div className="card-footer">
                            <button onClick={() => props.handleAddToCart(props.band)} className="w-100 btn btn-primary">Hire Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Band;