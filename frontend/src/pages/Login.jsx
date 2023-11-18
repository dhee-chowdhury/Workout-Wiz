import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import Spinner from "../components/Spinner";
const Login = () => {
  const { user } = useAuthContext();
  const { login, isLoading, error } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await login(email, password);
    // form.password.reset();
  };
  if (user) return <Navigate to="/"></Navigate>;
  return (
    <form onSubmit={handleSubmit} className="login">
      <h2>Login</h2>
      <label>Email</label>
      <input name="email" type="email" />
      <label>Password</label>
      <input name="password" type="password" />
      <button disabled={isLoading} type="submit">
        Login
      </button>
      {error && <p className="error">{error}</p>}
      {isLoading && <Spinner></Spinner>}
    </form>
  );
};

export default Login;
