import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  console.log(user);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  if (loading) return <Spinner></Spinner>;
  if (!user && !loading)
    return <Navigate to="/login" replace={true}></Navigate>;

  return children;
};

export default PrivateRoute;
