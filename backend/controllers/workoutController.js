const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts

const getWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

// get a single workout
const getSingleWorkout = async (req, res) => {
  try {
    // check valid id
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout could not be found." });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "Workout could not be found." });
    }
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// create a new workout
const addWorkout = async (req, res) => {
  // add a new doc to db
  try {
    const { title, load, reps } = req.body;
    // checking if the fields are empty
    if (!title || !load || !reps) {
      return res.status(400).json({
        error: "fill all the required fields: title, load, reps",
      });
    }
    const user_id = req.user._id;
    const workout = await Workout.create({ title, load, reps, user_id });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//  delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    // check valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout could not be found." });
    }
    const workout = await Workout.findOneAndDelete({ _id: id });
    // check if id exists
    if (!workout) {
      return res.status(404).json({ error: "Workout could not be found." });
    }
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// update a workout

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    // check valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout could not be found." });
    }
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    // check if id exists
    if (!workout) {
      return res.status(404).json({ error: "Workout could not be found." });
    }
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
