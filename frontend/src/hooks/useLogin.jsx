import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const user = { email, password };

    axios
      .post("http://localhost:5000/api/user/login", user)
      .then((res) => {
        console.log(res.data);
        // save the user in local storage: user and token
        localStorage.setItem("user", JSON.stringify(res.data));
        // update the auth context
        dispatch({ type: "LOGIN", payload: res.data });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error.response.data.error);
      });
  };

  return { login, isLoading, error };
};
