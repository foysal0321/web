import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Usecontext';
import './Style.css'

const LogIn = () => {
  const { signInUser, signinGoogle, signinGithub} = useContext(AuthContext);
  const providerGoogle = new GoogleAuthProvider();
  const [err,seterr] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
 // const from = location.state?.from?.pathname || '/' ;

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
   // navigate(from, {replace: true});
    seterr('')
  })
  .catch(err=>{
    console.error(err);
    seterr(err.message)
}) 
}

//signGoogle
const signGoogle=()=>{
  signinGoogle(providerGoogle)
  .then(result=>{
      const user = result.user;
      console.log(user);
  })
  .catch(err=>{
      console.errorg(err);
  })
}


    return (
        <div>
           <div className='container formm py-5'>
          <h4 className='text-center py-8'>Log in</h4>
          <form onSubmit={signinBtn}>         
            <label>Email</label> <br />
           <input type="email" name='email' placeholder='email' required/>    <br />  
            <label>Password</label> <br />
           <input type="password" name='pass' placeholder='password'/>  <br />
           <p className='err'></p>  
           <button>Log in</button>  
           <p className='pt-2'>Are you new?please <Link to='/signup'>Log In</Link></p>
          </form>
          <button onClick={signGoogle}>Sign in Google</button>
        </div>
        </div>
    );
};

export default LogIn;