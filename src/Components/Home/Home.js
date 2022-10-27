import React from 'react';
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container header'>
            <div className="img">
                <img src="https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png" alt="" />
            </div>
            <div className="info">
                <p className='lead'>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p> 
               <Link to='/courses'> <button className='btn btn-success'>Get start</button></Link> 
            </div>
        </div>
    );
};

export default Home;