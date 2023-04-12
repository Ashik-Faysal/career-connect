import React from "react";
import { Link } from "react-router-dom";
import {
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
//  export const handleClick = (id) => {
    // console.log("handleClick" , id)
//  };

const SingleFeatured = ({ card }) => {
  const { id, logo, jobTitle, brandName, location, salary, jobStyle } = card;

 const handleClick = (id) => {
//  console.log("handleClick" , id)
  };

  return (
    <div>
      <div className="card w-full border h-full bg-base-100 shadow-xl">
        <div className="card-body">
          <img className="w-16" src={logo} alt="" />
          <h2 className="card-title">{jobTitle}</h2>
          <p>{brandName}</p>
          <div className="flex gap-4">
            <button className="btn btn-outline">{jobStyle}</button>
            <button className="btn btn-outline">Full Time</button>
          </div>
          <div className="flex">
            <p className="flex items-center gap-2">
              <MapPinIcon className="h-6 w-6 text-stone-500" />
              <span>{location}</span>
            </p>
            <p className="flex items-center gap-2">
              <CurrencyDollarIcon className="h-6 w-6 text-stone-500" />
              <span>{salary}</span>
            </p>
          </div>
          <div className="card-actions">
            <Link
              to={`about/${id}`}
              className="btn bg-indigo-500"
              onClick={() => handleClick(id)}
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeatured;
