import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:flex justify-between items-center my_container bg-gray-200 p-6 text-black rounded-lg">
      <h2 className="text-5xl font-bold">Career Connect</h2>
      <div className="md:flex  gap-4 font-semibold">
        <Link className="btn-link hover:text-blue-300" to="/">
          Home
        </Link>
        <Link className="btn-link hover:text-blue-300" to="/statistics">
          Statistics
        </Link>
        <Link className="btn-link hover:text-blue-300" to="/applied">
          Applied Job
        </Link>
        <Link className="btn-link hover:text-blue-300" to="/blog">
          Blog
        </Link>
      </div>
      <button className="hidden md:block btn btn-info">Start Applying</button>
    </nav>
  );
};

export default Header;
