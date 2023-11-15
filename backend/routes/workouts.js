const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// ----------ROUTES-------------

// get all the workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

// get a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

// post a new workout
router.post("/", async (req, res) => {
  try {
    const { title, load, reps } = req.body;
    const workout = await Workout.create({ title, load, reps });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

module.exports = router;
