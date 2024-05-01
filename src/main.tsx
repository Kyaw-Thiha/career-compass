import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/root.tsx";
import ErrorPage from "./routes/error.tsx";
import HomePage from "./routes/home.tsx";
import MentorDetailPage from "./routes/mentor-detail.tsx";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/mentors/:id",
        element: <MentorDetailPage />,
      },
      // {
      //   path: "contacts/:contactId",
      //   element: <Contact />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
);


