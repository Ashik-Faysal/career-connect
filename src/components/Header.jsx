import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:flex justify-between items-center my_container bg-gray-200 p-6 rounded-lg">
      <h2 className="text-5xl font-bold mb-4">
        <span className="text-lime-700">Career</span> Connect
      </h2>
      <div className="flex flex-col md:flex-row gap-4 font-semibold">
        <Link className="btn-link text-stone-600 hover:text-stone-950 text-2xl font-semibold" to="/">
          Home
        </Link>
        <Link className="btn-link text-stone-600 hover:text-stone-950 text-2xl font-semibold" to="/statistics">
          Statistics
        </Link>
        <Link className="btn-link text-stone-600 hover:text-stone-950 text-2xl font-semibold" to="/applied">
          Applied Job
        </Link>
        <Link className="btn-link text-stone-600 hover:text-stone-950 text-2xl font-semibold" to="/blog">
          Blog
        </Link>
      </div>
      <button className="mt-4 btn btn-info">Start Applying</button>
    </nav>
  );
};

export default Header;
