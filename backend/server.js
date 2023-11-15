const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const cors = require("cors");

// initializing the express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
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

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
    console.log("connected to db successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });
