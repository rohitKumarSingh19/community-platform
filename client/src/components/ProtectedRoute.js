import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.warn("Protected Route Access Denied - Redirecting to Login");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
