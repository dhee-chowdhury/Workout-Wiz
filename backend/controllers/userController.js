const User = require("../models/userModel");

// login user
const loginUser = async (req, res) => {
  try {
    res.json({ message: "login user" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
    res.json({ message: "signup user" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
