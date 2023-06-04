import { Navigate, RouteObject } from "react-router-dom";

import { Layout } from "@components/Layout";
import { Crew, Destination, Home, Technology } from "@pages";
import { HOME, CREW, DESTINATION, TECHNOLOGY } from "@constants";

export const ROUTES: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, loader: () => HOME },
      {
        path: "/destination",
        element: <Destination />,
        loader: () => DESTINATION,
      },
      { path: "/crew", element: <Crew />, loader: () => CREW },
      {
        path: "/technology",
        element: <Technology />,
        loader: () => TECHNOLOGY,
      },

      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
];
