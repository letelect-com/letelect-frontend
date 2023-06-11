import React from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthProvider";
import { useContext } from "react";

export const RequireAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);
  // if (!auth) {
  //   return <Navigate to="/login " />;
  // }
  return children;
};
