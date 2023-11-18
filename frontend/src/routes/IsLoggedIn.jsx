/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
const IsLoggedIn = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    setLoading(false);
  }, [user]);
  if (loading) return <Spinner></Spinner>;

  if (user) return <Navigate to="/"></Navigate>;
  return children;
};

export default IsLoggedIn;
