import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/UseContext';
import './Header.css';
import { FaUser } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const {user, logOutUser} = useContext(AuthContext);

    const [toggle,settoggle] = useState(false);

    const logout=()=>{
      logOutUser()
    };

    const toogleBtn=()=>{
      settoggle(!toggle)
    };

    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="logo">
            <img src="https://www.pngfind.com/pngs/m/170-1706361_web-development-icon-web-development-logo-png-transparent.png" alt="" />
          </div>
        <Link to='/' className="navbar-brand" >Web Development</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/courses' className="nav-link active" aria-current="page">Courses</Link>
        </li>
        <li className="nav-item">
          <Link to='/blog' className="nav-link active" aria-current="page">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to='/faq' className="nav-link active" aria-current="page">FAQ</Link>
        </li>

        <button onClick={toogleBtn}>{toggle ? 'Dark' : 'Light'}</button>

          {
            user?.uid ?
            <button onClick={logout}>Logout</button> 
            :
            <>
              <li className="nav-item">
              <Link to='/register' className="nav-link active" aria-current="page">Register</Link>
              </li>
              <li className="nav-item">
              <Link to='/login' className="nav-link active" aria-current="page">Login</Link>
              </li>
            </>
          }

        {/* {
          user?.photoURL &&
        <Link to='/profile'> <img className='loginimg' src={user?.photoURL}
          data-bs-toggle="tooltip" data-bs-placement="top" title={user?.displayName}
          alt="" /></Link>
        } */}
          {
            user?.photoURL &&
            <div className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title={user?.displayName}>
            <Link to='/profile' > <FaUser />  </Link> 
          </div>
          }
        
                
          
        
       <ToastContainer />
       {/* https://www.pngfind.com/pngs/m/170-1706361_web-development-icon-web-development-logo-png-transparent.png */}
           
      </ul>
    </div>
  </div>
            </nav>
        </div>
    );
};

export default Header;