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
        <div className='course container py-5'>
            <div className="nameList">
                {
                    data.map((d)=>(
                       <div key={d.id}><Link to={d.id}> <button> {d.name} </button> </Link></div> 
                    ))
                }
            </div>
            <div className="cart">
           {
            data.map((d)=>(
                <div key={d.id} className="card" style={{width: '18rem'}}>
                <img src={d.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{d.name}</h5>
                    <p className="card-text">{d.info.slice(0,80)}..</p>
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