import React, { useContext } from 'react';
import { AuthContext } from '../../context/Usecontext';

const Home = () => {
    const {x} = useContext(AuthContext)
    console.log(x);
    return (
        <div>
            home
            {x}
        </div>
    );
};

export default Home;