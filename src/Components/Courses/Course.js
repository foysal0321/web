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
        <div>
           {
            data.map((d)=>(
                <div key={d.id} className="card">
                <img src={d.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{d.name}</h5>
                    <p class="card-text">{d.info}</p>
                    <Link to='/' className="btn btn-primary">Go somewhere</Link>
                </div>
                </div>

            ))
           }
        </div>
    );
};

export default Course;