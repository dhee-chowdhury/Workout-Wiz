const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");

// initializing the express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const PORT = process.env.PORT || 5000;
// routes
app.get("/", (req, res) => {
  res.json({ message: "The app is running successfully." });
});
app.use("/api/workouts", workoutRoutes);

// listen for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
