import axios from "axios";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const form = e.target;
    const title = form.title.value;
    const load = form.load.value;
    const reps = form.reps.value;
    const newWorkout = { title, load, reps };
    setError("");
    axios
      .post("http://localhost:5000/api/workouts", newWorkout, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setError("");
        form.reset();
        dispatch({ type: "CREATE_WORKOUT", payload: res.data });
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
