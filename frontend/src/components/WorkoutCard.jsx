/* eslint-disable react/prop-types */
const WorkoutCard = ({ workout }) => {
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
    </div>
  );
};

export default WorkoutCard;
