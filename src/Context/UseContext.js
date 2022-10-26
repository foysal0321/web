import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
const auth = '';

const UseContext = ({children}) => {

    const [user,setuser] = useState(null);
    const [loding,setloding] = useState(false);

    const createUser = (email,password)=>{
        
    };

    const signInUser = (email,password)=>{
        
    };

    const logOutUser = ()=>{

    };

    const signinGoogle = ()=>{

    };

    const signinGithub = ()=>{

    };

    useEffect(()=>{
        const unscribe = '';

        return () => unscribe()

    },[])

    const authinfo = {user, loding, createUser, signInUser,
    logOutUser, signinGoogle, signinGithub, 
    };
    return (
        <div>
            <AuthContext.Provider value={authinfo}>

            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;