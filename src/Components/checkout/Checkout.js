import React from 'react';
import {  useLoaderData, Link } from "react-router-dom";
const Checkout = () => {
    const data = useLoaderData()

    return (
        <div>
            {/* <h4>{data.name}</h4> */}
            <h2>Checkout pages</h2>
        </div>
    );
};

export default Checkout;