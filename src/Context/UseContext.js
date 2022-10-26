import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase';

export const AuthContext = createContext();
const auth = getAuth(app);

const UseContext = ({children}) => {

    const [user,setuser] = useState(null);
    const [loding,setloding] = useState(true);

    const createUser = (email,password)=>{
        setloding(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    };

    const signInUser = (email,password)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    const upProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const logOutUser = ()=>{
        setloding(true)
        return signOut(auth)
    };

    const signinGoogle = (provider)=>{
        setloding(true)
        return signInWithPopup(auth,provider)
    };

    const signinGithub = (provider)=>{
        setloding(true)
        return signInWithPopup(auth,provider)
    };

    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth, (current)=>{
            setuser(current);
            setloding(false)
        });
        return () => unscribe()

    },[])

    const authinfo = {user, loding, createUser, signInUser,
    logOutUser, upProfile, signinGoogle, signinGithub
    };

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;




// import React, { createContext,  } from 'react';

// export const AuthCon = createContext()
// const UseContext = ({children}) => {
//     const user = 'ali'
//     return (
//         <div>
//             <AuthCon.Provider value={user}>
//             {children}
//             </AuthCon.Provider>
//         </div>
//     );
// };

// export default UseContext;