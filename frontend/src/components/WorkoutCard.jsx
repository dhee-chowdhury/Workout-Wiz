/* eslint-disable react/prop-types */
import axios from "axios";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutCard = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/workouts/${id}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "DELETE_WORKOUT", payload: res.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="workout-card">
      <h2>{workout.title}</h2>
      <p>
        <strong>Load (KG): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt.toString()}</p>
      <span onClick={() => handleDelete(workout._id)}>delete</span>
    </div>
  );
};

export default WorkoutCard;
