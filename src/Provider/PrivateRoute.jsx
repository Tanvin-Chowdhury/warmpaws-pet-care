import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);

    const location = useLocation();

    if(user && user?.email){
        return children;
    }
    else {
        return <Navigate 
        to="/auth/login"
        state = {location.pathname}
        >
        </Navigate>
    }
};

export default PrivateRoute;