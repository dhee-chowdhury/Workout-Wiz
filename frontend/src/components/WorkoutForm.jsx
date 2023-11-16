import axios from "axios";
import { useState } from "react";

const WorkoutForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const load = form.load.value;
    const reps = form.reps.value;
    const newWorkout = { title, load, reps };
    setError("");
    axios
      .post("http://localhost:5000/api/workouts", newWorkout)
      .then((res) => {
        console.log(res.data);
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new workout</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" required />
      </div>
      <div>
        <label htmlFor="load">Load (KG)</label>
        <input type="number" name="load" required />
      </div>
      <div>
        <label htmlFor="reps">Reps</label>
        <input type="number" name="reps" required />
      </div>
      {error && (
        <p className="error">
          <small>{error}</small>
        </p>
      )}
      <button type="submit">Add workout</button>
    </form>
  );
};

export default WorkoutForm;
