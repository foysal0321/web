import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='container py-5 mx-auto'>
        <h4>User information</h4>
            <div  className="card" style={{width: '15rem'}}>
                <img src={user?.photoURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{user?.displayName}</h5>
                    <p className="card-text">{user?.email}</p>
                    
                </div>
                </div>
        </div>
    );
};

export default Profile;