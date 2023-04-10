import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import FirstPage from "./components/FirstPage";
import Statistics from "./components/Statistics";
import AppliedJob from "./components/AppliedJob";
import Blog from "./components/Blog";
import JobCategory from "./components/JobCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "/",
        element: <JobCategory />,
        loader: ()=>fetch("jobCategory.json")
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
        path: "blog",
        element: <Blog />,
        loader: ()=>fetch("blog.json")
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
