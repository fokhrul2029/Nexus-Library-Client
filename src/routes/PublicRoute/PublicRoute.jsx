/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../../pages/shared/Loader/Loader";

function PublicRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
}

export default PublicRoute;
