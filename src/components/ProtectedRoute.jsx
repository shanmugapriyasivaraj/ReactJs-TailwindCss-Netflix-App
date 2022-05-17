import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const ProtectedRoute = () => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return Children;
  }
};

export default ProtectedRoute;
