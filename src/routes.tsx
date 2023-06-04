import { Navigate, RouteObject } from "react-router-dom";
import { Crew, Destination, Home, Technology } from "@pages";
import { Layout } from "@components/Layout";
import { TECHNOLOGY } from "@constants/technology";
import { CREW } from "@constants/crew";
import { HOME } from "@constants/home";
import { Destination as DESTINATION } from "@constants/destination";

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
