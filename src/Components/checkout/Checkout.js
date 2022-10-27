import React from 'react';
import {  useLoaderData } from "react-router-dom";
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const data = useLoaderData()

    const access=()=>{
   toast.success('your access success!')
    }

    return (
        <div className='checkout container py-5'>
            <div className="card" style={{width: '15rem'}}>
                <img src={data.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.info.slice(0,30)}</p>                              
                </div>
                </div>
                <div className="form">
            <form >         
            <label>Name</label> <br />
           <input type="text" name='email' placeholder='name' required/>    <br />  
            <label>Email</label> <br />
           <input type="email" name='email' placeholder='email' />    <br />  
            <label>Phone</label> <br />
           <input type="number" name='email' placeholder='number'   />    <br />  
            <label>Password</label> <br />
           <input type="password" name='pass' placeholder='password'/>  <br />
 
           <button onClick={access}>Access</button>  
          </form>
                </div>
        </div>
    );
};

export default Checkout;