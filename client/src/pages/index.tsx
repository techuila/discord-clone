import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { path } from "../common/config/path";
import { HomeRoot } from "./home/root";
import { FriendsPage } from "./home/friends";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={path.channels.friends.getHref()} replace />,
  },
  {
    path: path.channels.root.path,
    element: <HomeRoot />,
    children: [
      {
        index: true,
        path: path.channels.friends.path,
        element: <FriendsPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
