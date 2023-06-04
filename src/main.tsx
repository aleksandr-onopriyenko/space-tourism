import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import "@assets/styles/index.scss";

const router = createHashRouter(ROUTES);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
