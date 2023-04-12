import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import FirstPage from "./components/FirstPage";
import Statistics from "./components/Statistics";
import AppliedJob from "./components/AppliedJob";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import JobDetails from "./components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied",
        element: <AppliedJob />,
      },
      {
        path: "about/:aboutId",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`/featured.json`),
      },
      {
        path: "blog",
        element: <Blog />,
        loader: () => fetch("blog.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
