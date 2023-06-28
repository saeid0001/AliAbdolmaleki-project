import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/components/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
