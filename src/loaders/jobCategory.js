
// import React from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// const AppliedJob = () => {
//   const featured = useLoaderData();
//   console.log(featured);
//   return (
//     <div>
//      tis a job
//     </div>
//   );
// };
// export default AppliedJob;

// import React, { useEffect, useState } from "react";

// const AppliedJob = () => {
//   const [job, setJob] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   useEffect(() => {
//     const storedId = localStorage.getItem("selectedJobs"); // get the id from local storage
//     console.log(storedId);

//     fetch("featured.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const job = data.find((job) => job.id === storedId); // find the job with the matching id
      

//         if (job) {
//           setJob(job); // set the job to the state if a match is found
//         } else {
//           setErrorMessage("No job found"); // set the error message if no match is found
//         }
//       })
//       .catch((error) => setErrorMessage(error.message));
//   }, []);

//   if (errorMessage) {
//     return <div>{errorMessage}</div>;
//   }

//   if (job) {
//     return (
//       <div>
//         <h3>{job.id}</h3>
//         <p>{job.description}</p>
//       </div>
//     );
//   }

//   return <div>Loading...</div>;
// };

// export default AppliedJob;


import React, { useEffect, useState } from "react";

const AppliedJob = () => {
  const [job, setJob] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("selectedJobs"); // get the id from local storage

    fetch("/featured.json")
      .then((response) => response.json())
      .then((data) => {
        const job = data.find((job) => job.id === storedId); // find the job with the matching id
console.log(job);
        if (job) {
          setJob(job); // set the job to the state if a match is found
        } else {
          setErrorMessage("No job found"); // set the error message if no match is found
        }
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (job) {
    return (
      <div>
        <h3>{job.brandName}</h3>
        <p>{job.salary}</p>
        <p>{job.phone}</p>
        {/* <p>{job.salary}</p> */}
        <p>{job.company}</p>
        {/* <p>{job.skills.join(", ")}</p> */}
        {/* display any other job details here */}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default AppliedJob;
