import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const  PrivateRoute =({ path, element }) => {
  const isAuthenticatation = useSelector(state => state.auth.isAuthenticatation);


  return isAuthenticatation ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default PrivateRoute;