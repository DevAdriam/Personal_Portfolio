import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Blogs from "@/pages/Blogs";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
]);
