const express = require("express");
const {
  addWorkout,
  getWorkouts,
  getSingleWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// ----------ROUTES-------------

// get all the workouts
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getSingleWorkout);

// post a new workout
router.post("/", addWorkout);

// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

module.exports = router;
