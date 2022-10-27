import React, { useEffect, useState } from 'react';
import {  useLoaderData, Link } from "react-router-dom";

const CourseDetails = () => {
    const data = useLoaderData()
    //console.log(data);

    const [dataA,setdata] = useState([])
    useEffect(()=>{
        fetch(`https://web-server-five.vercel.app/web`)
        .then(res=> res.json())
        .then(datA => setdata(datA))
    })
    return (
        <div>
            <div className="card">
                <img src={data.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.info}</p>
                    
                           <Link to='/checkout' className="btn btn-primary">Get access</Link>  
                         <button>Get Pdf</button>
                   
                </div>
                </div>
                <Link to='/courses'> <button>Back to courses</button> </Link>
        </div>
    );
};

export default CourseDetails;