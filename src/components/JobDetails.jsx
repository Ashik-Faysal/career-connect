import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const { aboutId } = useParams();
  const [jobs, setJobs] = useState([]);
  // console.log(jobs);
  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find((job) => job.id == aboutId);
        setJobs(jobData);
      });
  }, [aboutId]);

  const handleApplyNow = () => {
    // Get the current job data from localStorage or initialize an empty array
    const jobData = JSON.parse(localStorage.getItem("jobData") || "[]");

    // Check if the job ID is already in the saved data
    const jobExists = jobData.some((job) => job.id === jobs.id);

    if (!jobExists) {
      // Add the current job to the array of job data
      jobData.push(jobs);

      // Store the array of job data under the unique key
      localStorage.setItem("jobData", JSON.stringify(jobData));

      // Alert the user that the job data has been saved
      toast.success("Job data has been saved to local storage.");
    } else {
      // Alert the user that the job data has already been saved
      toast.warning("Job data has already been saved to local storage.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-48 bg-stone-300  text-black mb-12">
        <h1 className="text-5xl font-bold"> Job Details</h1>
      </div>
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
          <p className="flex items-center gap-2">
            <CurrencyDollarIcon className="h-6 w-6 text-stone-500" />
            <span className="text-2xl">Salary: </span>
            {jobs.salary}
          </p>
          <p className="flex items-center gap-2">
            <BriefcaseIcon className="h-6 w-6 text-stone-500" />
            <span className="text-2xl">Job Title: </span>
            {jobs.jobTitle}
          </p>
          <h3 className="text-3xl font-bold">Contact Information</h3>
          <div className="border border-gray-500 my-4"></div>
          <p className="flex items-center gap-2">
            <DevicePhoneMobileIcon className="h-6 w-6 text-stone-500" />
            <span className="text-2xl">Phone: </span>
            {jobs.phone}
          </p>
          <p className="flex items-center gap-2">
            <EnvelopeIcon className="h-6 w-6 text-stone-500" />
            <span className="text-2xl">Email: </span>
            {jobs.email}
          </p>
          <p className="flex items-center gap-2">
            <MapPinIcon className="h-6 w-6 text-stone-500" />
            <span className="text-2xl">Address: </span>
            {jobs.location}
          </p>
          <button
            onClick={handleApplyNow}
            className="btn btn-info mx-auto my-8 w-[70%]"
          >
            Apply Now
          </button>
        </div>
        <ToastContainer autoClose="2000" />
      </div>
    </>
  );
};

export default JobDetails;
