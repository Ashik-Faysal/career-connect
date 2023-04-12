import React from "react";
import { Link } from "react-router-dom";

const TopBody = () => {
  return (
    <div className="grid md:grid-cols-2 bg-gray-300 text-black gap-4 p-8">
      <div className="p-4">
        <h1 className="text-6xl font-bold">
          One Step Closer To Your <br />{" "}
          <span className="text-violet-400">Dream Job</span>
        </h1>
        <p className="my-8 font-semibold">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link className=" btn bg-violet-500">Get Started</Link>
      </div>
      <div className="mx-auto">
        <img
          src="https://images.unsplash.com/photo-1680963551392-f17f6d9eca71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default TopBody;
