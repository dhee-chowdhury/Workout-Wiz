const express = require("express");
require("dotenv").config();

// initializing the express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const PORT = process.env.PORT || 5000;
// routes
app.get("/", (req, res) => {
  res.json({ message: "The app is running successfully." });
});

// listen for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
