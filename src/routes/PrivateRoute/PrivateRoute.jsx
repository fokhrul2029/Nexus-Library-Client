/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
