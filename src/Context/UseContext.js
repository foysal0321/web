import React, { createContext, useEffect, useState } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../firebase/Firebase';

export const AuthContext = createContext();
//const auth = getAuth(app);

const UseContext = ({children}) => {

    const [user,setuser] = useState('ali');
    //const [loding,setloding] = useState(false);

    // const createUser = (email,password)=>{
        
    // };

    // const signInUser = (email,password)=>{
        
    // };

    // const logOutUser = ()=>{

    // };

    // const signinGoogle = ()=>{

    // };

    // const signinGithub = ()=>{

    // };

    // useEffect(()=>{
    //     const unscribe = '';

    //     return () => unscribe()

    // },[])

    // const authinfo = {user, loding, createUser, signInUser,
    // logOutUser, signinGoogle, signinGithub, 
    // };

    const authinfo={user}
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