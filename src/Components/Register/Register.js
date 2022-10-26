import React, { useContext } from 'react';
import './Register.css'
const Register = () => {
    //const {user, createUser, signinGoogle, signinGithub} = useContext();

    const createBtn=(e)=>{
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
          <h4>Register</h4>
          <form onSubmit={createBtn}>
            <label>Name</label> <br />
           <input type="text" name='name' placeholder='name'/>    <br />  
            <label>Picture</label> <br />
           <input type="text" name='picture' placeholder='picture'/>      <br />
            <label>Email</label> <br />
           <input type="email" name='email' placeholder='email' required/>    <br />  
            <label>Password</label> <br />
           <input type="password" name='pass' placeholder='password'/>  <br />  
           <button>Register</button>  
          </form>

          <button>Sign in Google</button>
          <button>Sign in Github</button>
        </div>
    );
};

export default Register;