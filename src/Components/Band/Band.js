import React from 'react';
import './Band.css'

const Band = (props) => {
    /* destructuring from band  */
    const { name, member, leadVocal, founded, origin, genres, hiringPrice, image, facebook, wikipidea } = props.band;
    return (
        /* making card to show band  */
        <div className="band">
            <div className="col shadow rounded">
                <div className="card h-100 band-info">
                    <div className="d-flex justify-content-center">
                        <img src={image} className="card-img-top band-image" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-center">{name}</h3>
                        <h6>Genres :<small> {genres}</small></h6>
                        <h6>Origin :<small> {origin}</small></h6>
                        <h6>Total Member : <small>{member}</small></h6>
                        <h6>Lead Vocal : <small>{leadVocal}</small></h6>
                        <h6>Established in : <small>{founded}</small></h6>
                        <h4>Hiring Price : ${hiringPrice}</h4>
                        <button onClick={() => props.handleAddToCart(props.band)} className="w-100 btn btn-primary mt-3"><i className="fas fa-cart-plus"></i> Hire Now</button>
                        <div className="card-footer">
                            <h6 className="text-center">Find Us On </h6>
                            <div className="d-flex justify-content-around fs-4">
                                <a href={facebook} target="_blank"><i className="fab fa-facebook-square"></i></a>
                                <a href={wikipidea} target="_blank"><i className="fab fa-wikipedia-w"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Band;