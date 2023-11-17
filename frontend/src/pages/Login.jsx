const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className="login">
      <h2>Login</h2>
      <label>Email</label>
      <input name="email" type="email" />
      <label>Password</label>
      <input name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
