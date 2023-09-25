import React from "react";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../../config/routes";
import { useAuth } from "../../hooks/auth";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading: authLoading, error } = useAuth();
  console.log(user);

  if (authLoading) {
    return <div>Loading</div>;
  }

  if (user && !authLoading) {
    return children;
  }

  return <Navigate to={LOGIN} />;
};

export default ProtectedRoute;
