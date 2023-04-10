import React from "react";
import TopBody from "./TopBody";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";

const FirstPage = () => {
  return (
    <div className="my_container">
      <TopBody />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default FirstPage;
