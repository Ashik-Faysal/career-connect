import React, { useEffect, useState } from "react";
import ShowApplied from "./ShowApplied";

const AppliedJob = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  useEffect(() => {
    // Retrieve data from local storage
    const storedJobs = JSON.parse(localStorage.getItem("jobData")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <div className="m-24">
      <div className="flex justify-center items-center h-48 bg-stone-300  text-black mb-12">
        <h1 className="text-5xl font-bold">Applied Jobs</h1>
      </div>
      {jobs.map((job) => (
        <ShowApplied job={job} key={job.id} />
      ))}
    </div>
  );
};

export default AppliedJob;
