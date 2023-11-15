const Workout = require("../models/workoutModel");

// get all workouts

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

// get a single workout

// create a new workout
const addWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // add a new doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//  delete a workout

// update a workout

module.exports = {
  addWorkout,
  getWorkouts,
};
