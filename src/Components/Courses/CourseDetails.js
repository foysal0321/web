import React, { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';
import {  useLoaderData, Link } from "react-router-dom";


const CourseDetails = () => {
    const data = useLoaderData();

    //pdf.....
    const compontRef= useRef();
    const handlePrint = useReactToPrint({
     content:() => compontRef.current,
     documentTitle: 'emp-data',
     onAfterPrint: () => alert('print success')
    })
    
    return (
        <div>         
            <div className="pdf py-5">
              <div ref={compontRef} style={{width: '100%',height: '600px'}} className="">
                <div className="card">
                <img src={data.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.info}</p>                
                           <Link to={`/checkout/${data.id}`} className="btn btn-primary">Get access</Link>  
                         <button onClick={handlePrint}>Get Pdf</button>            
                </div>
                </div>
              </div>
            </div>
             <Link to='/courses'> <button>Back to courses</button> </Link>
        </div>
    );
};

export default CourseDetails;