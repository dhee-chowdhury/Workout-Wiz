import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const { login, isLoading, error } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await login(email, password);
    form.reset();
  };
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
    </form>
  );
};

export default Login;
