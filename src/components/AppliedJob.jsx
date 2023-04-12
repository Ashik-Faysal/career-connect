import React, { useEffect, useState } from "react";
import ShowApplied from "./ShowApplied";

const AppliedJob = () => {
  // Set initial state for jobs and filtered jobs
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Use effect hook to retrieve data from local storage
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobData")) || [];
    setJobs(storedJobs);
    setFilteredJobs(storedJobs);
  }, []);

  // Filter jobs based on type and update filtered jobs state
  const handleFilterJobs = (type) => {
    if (type == "Remote") {
      setFilteredJobs(jobs.filter((job) => job.type == "Remote"));
    } else if (type == "OnSite") {
      setFilteredJobs(jobs.filter((job) => job.type == "OnSite"));
    } else {
      setFilteredJobs(jobs);
    }
  };

  return (
    <div className="m-24">
      {/* Render the title */}
      <div className="flex justify-center items-center h-48 bg-stone-300  text-black mb-12">
        <h1 className="text-5xl font-bold">Applied Jobs</h1>
      </div>
      {/* Render the filter dropdown */}
      <div className="flex justify-end mb-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {/* Apply the "Remote" filter */}
              <a onClick={() => handleFilterJobs("Remote")}>Remote</a>
            </li>
            <li>
              {/* Apply the "OnSite" filter */}
              <a onClick={() => handleFilterJobs("OnSite")}>OnSite</a>
            </li>
            <li>
              {/* Clear the filter */}
              <a onClick={() => setFilteredJobs(jobs)}>Clear Filter</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Render each job in the filtered jobs array */}
      {filteredJobs.map((job) => (
        <ShowApplied job={job} key={job.id} />
      ))}
    </div>
  );
};

export default AppliedJob;
