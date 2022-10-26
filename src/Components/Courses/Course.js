import React, { useEffect, useState } from 'react';
import './Course.css';
import {  useLoaderData,Link } from "react-router-dom";

const Course = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch(`https://web-server-five.vercel.app/web`)
        .then(res=> res.json())
        .then(datA => setdata(datA))
    })
    //console.log(data);
    return (
        <div className='course'>
            <div className="nameList">
                {
                    data.map((d)=>(
                       <h6 key={d.id}><Link to={d.id}>{d.name}</Link></h6> 
                    ))
                }
            </div>
            <div className="cart">
           {
            data.map((d)=>(
                <div key={d.id} className="card">
                <img src={d.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{d.name}</h5>
                    <p className="card-text">{d.info}</p>
                    <Link to={d.id} className="btn btn-primary">Get Details</Link>
                </div>
                </div>

            ))
           }
           </div>
        </div>
    );
};

export default Course;