const express = require("express");
const {
  addWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// require auth for all workout routes
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);
// ----------ROUTES-------------

// get all the workouts
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getSingleWorkout);

// post a new workout
router.post("/", addWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
