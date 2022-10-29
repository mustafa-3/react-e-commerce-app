import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen  ">
        <div className="text font-bold underline sm:text-center md:text-right">
          Home
        </div>
        <button className="btn btn-outline btn-lg btn-ghost">Button</button>
      </div>
    </>
  );
};

export default Home;
