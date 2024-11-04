import React from 'react';
import { Navigate, Outlet, } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRouting = () => {
    const user = useSelector(state => state.user.currentUser);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ?<Outlet /> 
                : <Navigate to="/login"/>;
}

export default PrivateRouting
