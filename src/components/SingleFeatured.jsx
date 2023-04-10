import React from "react";

const SingleFeatured = ({ card }) => {
  const { id, logo, jobTitle, brandName, location, salary, jobStyle } = card;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <img className="w-16" src={logo} alt="" />
          <h2 className="card-title">{jobTitle}</h2>
          <p>{brandName}</p>
          <div className="flex gap-4">
            <button className="btn btn-outline">{jobStyle}</button>
            <button className="btn btn-outline">Full Time</button>
          </div>
          <div className="flex">
            <p>{location}</p>
            <p>{salary}</p>
          </div>
          <div className="card-actions">
            <button className="btn bg-indigo-500">View Details</button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default SingleFeatured;
