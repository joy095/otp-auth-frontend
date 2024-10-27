/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import User from "./pages/users/register/User";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
