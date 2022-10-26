import React, { useContext } from 'react';
import { AuthContext } from '../Context/UseContext';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const PrivetRout = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation();
    
    if(loding){
        return <p>Loading...</p>
    }

    if(!user){
     return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivetRout;