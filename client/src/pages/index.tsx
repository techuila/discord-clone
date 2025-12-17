import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { path } from "../common/config/path";
import { ChannelsRoot } from "./channels/root";
import { FriendsPage } from "./channels/friends";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={path.channels.friends.getHref()} replace />,
  },
  {
    path: path.channels.root.path,
    element: <ChannelsRoot />,
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
