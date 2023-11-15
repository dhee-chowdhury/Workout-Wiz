import { useEffect, useState } from "react";
import axios from "axios";
import WorkoutCard from "../components/WorkoutCard";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/workouts")
      .then((res) => {
        setWorkouts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => (
          <WorkoutCard key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Home;
