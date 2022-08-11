import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UseContext } from '../App';

const PrivateRoute = () => {
    const [userData,setUserData]=useContext(UseContext);
    return (
        <div>
            {
                userData.email ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;