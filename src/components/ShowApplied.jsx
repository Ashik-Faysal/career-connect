import React from 'react';

import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ShowApplied = ({ job }) => {
    
    const { id, logo, jobTitle, brandName, location, salary, jobStyle } = job;
    return (
      <div className="border p-8 sm:flex justify-between items-center mb-8 rounded-xl">
        <div className="sm:flex">
          <div className="mr-8">
            <img className="w-36" src={logo} alt="" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-2">{jobTitle}</h3>
            <h3 className="text-4xl font-semibold text-stone-500 mb-2">
              {brandName}
            </h3>
            <div className="sm:flex gap-2">
              <button className="btn btn-outline">{jobStyle}</button>
              <button className="btn btn-outline mb-2">Full Time</button>
            </div>
            <div className="sm:flex gap-8">
              <p className="font-bold mb-2 flex items-center gap-2">
                <MapPinIcon className="h-6 w-6 text-stone-500" />
                <span>{location}</span>
              </p>
              <p className="font-bold mb-2 flex items-center gap-2">
                <CurrencyDollarIcon className="h-6 w-6 text-stone-500" />
                <span>{salary}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-info">Show Details</button>
        </div>
      </div>
    );
};

export default ShowApplied;