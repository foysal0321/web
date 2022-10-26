import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const Login = () => {
    const {user, signInUser} = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;

  const signinBtn=(e)=>{
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signInUser(email,pass)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(err=>{
      console.error(err);
  })
    
    //console.log(name,picture,email,pass);
}
    return (
        <div className='container form'>
          <h4>Log in</h4>
          <form onSubmit={signinBtn}>         
            <label>Email</label> <br />
           <input type="email" name='email' placeholder='email' required/>    <br />  
            <label>Password</label> <br />
           <input type="password" name='pass' placeholder='password'/>  <br />  
           <button>Log in</button>  
           <p>Are you new?please <Link to='/register'>register</Link></p>
          </form>

          <button>Sign in Google</button>
          <button>Sign in Github</button> 
        </div>
    );
};

export default Login;