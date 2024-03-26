import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import SuccessOrder from "@/pages/SuccessOrder";

import { MainLayout } from "@/components/layouts/MainLayout";

import { homeLoader } from "./loaders/homeLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    loader: homeLoader,
    children: [
      {
        index: true,
        path: "home",
        Component: Home,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "success",
        Component: SuccessOrder,
      },
    ],
  },
]);
