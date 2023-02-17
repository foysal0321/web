import React, { createContext, useState, useEffect} from 'react';
import app from '../firebase/firebase';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const Usecontext = ({children}) => {
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


    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth, (current)=>{
            setuser(current);
            setloding(false)
        });
        return () => unscribe()

    },[])

    const authinfo = {user, loding, createUser, signInUser,
    logOutUser, upProfile, signinGoogle
    };

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Usecontext;