import { useEffect } from "react";
import axios from "axios";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  // const [workouts, setWorkouts] = useState([]);

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/workouts")
      .then((res) => {
        // setWorkouts(res.data);
        dispatch({ type: "SET_WORKOUTS", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  );
};

export default Home;
