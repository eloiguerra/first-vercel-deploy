import { lazy } from "react";

export const svgs = {
  Cart: lazy(() => import("./svgs/CartIcon")),
  Basket: lazy(() => import("./svgs/BasketIcon")),
  Plus: lazy(() => import("./svgs/PlusIcon")),
  Minus: lazy(() => import("./svgs/MinusIcon")),
  Trash: lazy(() => import("./svgs/TrashIcon")),
};
