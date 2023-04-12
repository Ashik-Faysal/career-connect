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
    if (type === "Remote") {
      setFilteredJobs(jobs.filter((job) => job.jobStyle === "Remote"));
    } else if (type === "OnSite") {
      setFilteredJobs(jobs.filter((job) => job.jobStyle === "OnSite"));
    } else {
      setFilteredJobs(jobs);
    }
  };

  // Clear the filter and show all jobs
  const clearFilter = () => {
    setFilteredJobs(jobs);
  };

  return (
    <div className="m-4 md:m-24">
      {/* Render the title */}
      <div className="flex justify-center items-center h-48 bg-stone-300  text-black mb-12">
        <h1 className="text-5xl font-bold">Applied Jobs</h1>
      </div>
      {/* Render the filter dropdown */}
      <div className="flex justify-end mb-4 mr-4">
        <div className="dropdown">
          <div tabIndex={0} className="btn-group">
            <button className="btn m-1 dropdown-toggle">Filter</button>
            <ul className="menu dropdown-content mt-12">
              <li>
                <a
                  onClick={() => handleFilterJobs("Remote")}
                  className={
                    filteredJobs.length && filteredJobs[0].jobStyle === "Remote"
                      ? "active"
                      : ""
                  }
                >
                  Remote
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleFilterJobs("OnSite")}
                  className={
                    filteredJobs.length && filteredJobs[0].jobStyle === "OnSite"
                      ? "active"
                      : ""
                  }
                >
                  OnSite
                </a>
              </li>
              <li>
                <a onClick={clearFilter}>Clear</a>
              </li>
            </ul>
          </div>
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
