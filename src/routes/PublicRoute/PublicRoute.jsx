/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
}

export default PublicRoute;
