import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';
import './Register.css';
import { Link } from 'react-router-dom';
const Register = () => {
    const {user, createUser, upProfile, signinGoogle, signinGithub  } = useContext(AuthContext);

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    const createBtn=(e)=>{
        e.preventDefault();

        const from = e.target;
        const name = from.name.value;
        const picture = from.picture.value;
        const email = from.email.value;
        const pass = from.pass.value;

        createUser(email,pass)
        .then(result=>{
            const user = result.user;
            console.log(user);
            profileUpdate(name,picture)
            from.reset()

        })
        .catch(err=>{
            console.error(err);
        })
    }

    const profileUpdate=(name,photo)=>{
        const profile = {
            displayName:name,
            photoURL:photo
        }
        upProfile(profile)
        .then(()=>{

        })
        .catch(err=>{
            console.error(err);
        })
    }

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

    const signGithub = ()=>{
        signinGithub(providerGithub)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(err=>{
            console.errorg(err);
        })
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
           <p>Are you visit the site?please <Link to='/login'>log in</Link></p>
          </form>

          <button onClick={signGoogle}>Sign in Google</button>
          <button onClick={signGithub}>Sign in Github</button>
        </div>
    );
};

export default Register;