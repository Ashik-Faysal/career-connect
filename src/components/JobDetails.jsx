import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const JobDetails = () => {
  const {aboutId}= useParams()
const [jobs, setJobs] = useState([]);
console.log(jobs);
useEffect(() => {
  fetch("/featured.json")
    .then((res) => res.json())
    .then((data) => {
      const jobData = data.find((job) => job.id == aboutId );
      setJobs(jobData);
    });
}, [aboutId]);
  return (
    <div className="mx-4 md:m-24 md:flex gap-8 bg-white text-black">
      <div className="md:w-[65%] p-8">
        <p className="mb-4">
          <span className="text-2xl font-semibold">Job Description: </span>
          {jobs.jobDescription}
        </p>
        <p className="mb-4">
          <span className="text-2xl font-semibold">Job Responsibility: </span>
          {jobs.jobResponsibility}
        </p>
        <p className="mb-4">
          <span className="text-2xl font-semibold">
            Educational Requirement:{" "}
          </span>
          {jobs.educationalRequirement}
        </p>
        <p className="mb-4">
          <span className="text-2xl font-semibold">Experiences: </span>
          {jobs.experience}
        </p>
      </div>
      <div className="md:w-[30%] bg-violet-200 p-8 m-4">
        <h3 className="text-3xl font-bold">Job Details</h3>
        <div className="border border-gray-500 my-4"></div>
        <p>
          <span className="text-2xl">Salary: </span>
          {jobs.salary}
        </p>
        <p>
          <span className="text-2xl">Job Title: </span>
          {jobs.jobTitle}
        </p>
        <h3 className="text-3xl font-bold">Contact Information</h3>
        <div className="border border-gray-500 my-4"></div>
        <p>
          <span className="text-2xl">Phone: </span>
          {jobs.phone}
        </p>
        <p>
          <span className="text-2xl">Email: </span>
          {jobs.email}
        </p>
        <p>
          <span className="text-2xl">Address: </span>
          {jobs.location}
        </p>
        <button className="btn btn-info mx-auto my-8 w-[70%]">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
