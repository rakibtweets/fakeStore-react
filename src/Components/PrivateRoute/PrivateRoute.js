/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  Navigate, Outlet, useLocation
} from 'react-router-dom';
import useAuth from '../../HOC/useAuth';

function PrivateRoute() {
    const { user, isLoading } = useAuth();
    console.log('PrivateRoute ~ isLoading', isLoading);
    console.log('PrivateRoute ~ user', user.email);
    const location = useLocation();
    console.log('PrivateRoute ~ location', location.pathname);
    if (isLoading) {
        return (
          <h4 className="mt-8 font-bold text-center p-3 text-red-600">
            User Loading...
          </h4>
        );
      }
  //  if (!user.email) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  //  }
   return user.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
