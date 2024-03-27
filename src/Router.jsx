import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/home/Home.jsx";
import Shop from "./components/shop/Shop.jsx";
import Cart from "./components/cart/Cart.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />
        },
        {
          path: "cart",
          element: <Cart />
        }
      ],
    }
  ]);

  return <RouterProvider router={router} />
}

export default Router;