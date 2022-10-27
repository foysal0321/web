import React from 'react';
import {  useLoaderData, Link } from "react-router-dom";
const Checkout = () => {
    const data = useLoaderData()

    return (
        <div>
            
            <h2>Checkout pages</h2>
            <div className="card">
                <img src={data.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.info}</p>                
                            
                                   
                </div>
                </div>
        </div>
    );
};

export default Checkout;