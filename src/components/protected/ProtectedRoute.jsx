import React from "react";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../../config/routes";
import { useAuth } from "../../hooks/auth";
import Loading from "../Loading";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading: authLoading, error } = useAuth();

  if (authLoading) {
    return <Loading />;
  }

  if (user && !authLoading) {
    return children;
  }

  return <Navigate to={LOGIN} />;
};

export default ProtectedRoute;
