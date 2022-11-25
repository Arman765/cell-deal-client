import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// import Product from "../../pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
    ],
  },
]);
