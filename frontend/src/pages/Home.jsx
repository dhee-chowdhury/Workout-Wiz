import { useEffect, useState } from "react";
import axios from "axios";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Spinner from "../components/Spinner";

const Home = () => {
  // const [workouts, setWorkouts] = useState([]);

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (user) {
      axios
        .get("http://localhost:5000/api/workouts", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          // setWorkouts(res.data);
          dispatch({ type: "SET_WORKOUTS", payload: res.data });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [dispatch, user]);
  return (
    <div className="home">
      <div className="workouts">
        {loading && <Spinner></Spinner>}
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
