import React from "react";
import { Link } from "react-router-dom";

//  export const handleClick = (id) => {
    // console.log("handleClick" , id)
//  };

const SingleFeatured = ({ card }) => {
  const { id, logo, jobTitle, brandName, location, salary, jobStyle } = card;

 const handleClick = (id) => {
 console.log("handleClick" , id)
  };

  return (
    <div className="bg-white">
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
            <Link to= {`about/${id}`} className="btn bg-indigo-500" onClick={()=>handleClick(id)}>
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeatured;
