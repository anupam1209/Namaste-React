import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// we will lazy load the Grocery component (we will not load the component like we did above)
// this one line of code will perform the lazy loading (on-demand loading) that means when we need the component, then
// only we will load the component
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },

  {},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
