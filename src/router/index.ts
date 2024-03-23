import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    // element:
    Component: Home,
    children: [
      {
        index: true,
        path: "home",
        Component: Home,
      },
      {
        path: "shop",
      },
      {
        path: "cart",
      },
      {
        path: "order",
      },
      {
        path: "success",
      },
    ],
  },
]);
