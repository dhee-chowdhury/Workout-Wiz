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
  try {
    res.json({ message: "signup user" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
