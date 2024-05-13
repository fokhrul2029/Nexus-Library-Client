/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../../pages/shared/Loader/Loader";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
