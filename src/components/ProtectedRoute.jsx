import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { showInfo } from '../core/utils/toast.util';

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const location = useLocation();
  
  // If not authenticated, show message and redirect to login
  if (!isAuthenticated) {
    showInfo('Please login first to access this page.');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If user role is not in allowed roles, redirect to unauthorized
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  // If authenticated and role is allowed, render children
  return <Outlet />;
};

export default ProtectedRoute;