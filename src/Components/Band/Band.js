import React from 'react';
import './Band.css'

const Band = (props) => {
    const { name, member, leadVocal, founded, origin, genres, hiringPrice, image, facebook, wikipidea } = props.band;
    return (
        <div>
            <div className="col shadow">
                <div className="card h-100">
                    <div className="d-flex justify-content-center">
                        <img src={image} className="card-img-top" alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name : {name}</h5>
                        <h6 className="card-title">Genres :<small> {genres}</small></h6>
                        <h6 className="card-title">Origin :<small> {origin}</small></h6>
                        <h6 className="card-title">Total Member : <small>{member}</small></h6>
                        <h6 className="card-title">Lead Vocal : <small>{leadVocal}</small></h6>
                        <h6 className="card-title">Established in : <small>{founded}</small></h6>
                        <h4 className="card-title">Hiring Price : ${hiringPrice}</h4>
                        <button onClick={() => props.handleAddToCart(props.band)} className="w-100 btn btn-primary"><i className="fas fa-cart-plus"></i> Hire Now</button>
                        <div className="card-footer">
                            <h6 className="text-center">Find Us On </h6>
                            <div className="d-flex justify-content-around fs-4">
                                <a href={facebook} target="_blank"><i class="fab fa-facebook-square"></i></a>
                                <a href={wikipidea} target="_blank"><i class="fab fa-wikipedia-w"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Band;