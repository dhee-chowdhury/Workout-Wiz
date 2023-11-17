import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const { signup, isLoading, error } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signup(email, password);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="signup">
      <h2>Sign up</h2>
      <label>Email</label>
      <input name="email" type="email" />
      <label>Password</label>
      <input name="password" type="password" />
      <button disabled={isLoading} type="submit">
        Sign up
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Signup;
