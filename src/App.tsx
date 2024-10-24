/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/users/register/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    children: [
      {
        path: "register",
        element: <User />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
