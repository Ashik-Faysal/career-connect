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
    <div>
      {
        jobs.map(job => <ShowApplied
          job={job}
          key={job.id}
        />)
      }
    </div>
  );
};

export default AppliedJob;
