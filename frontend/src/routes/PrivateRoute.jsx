/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  console.log(user);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  if (loading) return;
  if (!user && !loading)
    return <Navigate to="/login" replace={true}></Navigate>;

  return children;
};

export default PrivateRoute;
