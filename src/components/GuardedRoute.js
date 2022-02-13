import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

const GuardedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return   token
  ? <Outlet />
  : <Navigate to='/login' />
}


export default GuardedRoute;