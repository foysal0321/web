import React, { useContext } from 'react';
import './Login.css'

const Login = () => {
  //  const {user, signInUser} = useContext()

  const signinBtn=(e)=>{
    e.preventDefault();

    const from = e.target;
    const name = from.name.value;
    const picture = from.picture.value;
    const email = from.email.value;
    const pass = from.pass.value;

    
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
          </form>

          <button>Sign in Google</button>
          <button>Sign in Github</button> 
        </div>
    );
};

export default Login;