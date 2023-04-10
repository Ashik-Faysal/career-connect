import React, { useEffect, useState } from "react";
import SingleFeatured from "./SingleFeatured";

const FeaturedJobs = () => {
  const [featured, setFeatured] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [numToShow, setNumToShow] = useState(4);

  useEffect(() => {
    fetch("featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
    setNumToShow(featured.length);
  };

  return (
    <div className="bg-white lg:p-32">
      <div className="text-center my-8 text-black">
        <h3 className="text-4xl font-bold">Featured Jobs</h3>
        <p className="font-semibold py-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 px-32">
        {featured.slice(0, numToShow).map((card) => (
          <SingleFeatured card={card} key={card.id} />
        ))}
      </div>
      {!showAll && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleShowAll}
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
