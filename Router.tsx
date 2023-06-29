import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/components/home/Home";
import DetailsMusic from "./src/components/pages/detailsMusic/DetailsMusic";
import PageAllmusic from "./src/components/pages/PageAllMusic/PageAllmusic";
import Unfound from "./src/components/main/Unfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : "*" ,
    element: <Unfound /> 
  } ,
  {
    path: "music/:name",
    element: <DetailsMusic />,
  },
  {
    path: "AllMusic",
    element: <PageAllmusic />,
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
