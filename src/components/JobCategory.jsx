import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCategory from "./SingleCategory";

const JobCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="bg-white text-black p-8">
      <div className="text-center my-12">
        <h3 className="text-4xl font-bold">Job Category List</h3>
        <p className="font-semibold py-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:flex justify-around ">
        {category.map((card) => (
          <SingleCategory
            card={card}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
