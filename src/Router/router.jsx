import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"projects",
        element:<Projects/>
      },
      {
        path:"projects/:id",
        element:<ProjectDetails/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ],
  },
]);

export default router;
