import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Usecontext';

const SignUp = () => {
  const { createUser, upProfile, signinGoogle,  } = useContext(AuthContext);
  const providerGoogle = new GoogleAuthProvider();
  const [err,seterr] = useState('');
  const navigate = useNavigate();
 // const location = useLocation();

  const createBtn=(e)=>{
    e.preventDefault();

    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const pass = from.pass.value; 

//console.log(name,email,pass);

   //firebase deploy 
    createUser(email,pass)
    .then(result=>{
        const user = result.user;
        console.log(user);
        profileUpdate(name)
        from.reset()
        seterr('');
        //navigate(form, {replace: true});
    })
    .catch(err=>{
        console.error(err);
        //seterr(err.message)
    })
}

const profileUpdate=(name)=>{
  const profile = {
      displayName:name
  }
  upProfile(profile)
  .then(()=>{

  })
  .catch(err=>{
      console.error(err);
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
          <h4 className='text-center py-8'>Sign Up</h4>
          <form onSubmit={createBtn}>         
            <label>Name</label> <br />
           <input type="text" name='name' placeholder='name' required/>    <br />  
            <label>Email</label> <br />
          <input type="email" name='email' placeholder='email' required/>    <br />  
            <label>Password</label> <br />
           <input type="password" name='pass' placeholder='password'/>  <br />
           <p className='err'></p>  
           <button>Sign Up</button>  
           <p className='pt-2'>Are you visit the site?please <Link to='/signin'>Sign Up</Link></p>
          </form>
          <button onClick={signGoogle}>Sign in Google</button>
          </div>
        </div>
    );
};

export default SignUp;