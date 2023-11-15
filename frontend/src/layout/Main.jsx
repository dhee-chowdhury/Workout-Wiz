import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pages">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
