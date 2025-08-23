import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./component/Dashboard";
import HomePage from "./component/HomePage";
import HomeSlider from "./Pages/HomeSlider";
import CategoryList from "./Pages/CategoryList";
import SubCategory from "./Pages/SubCategory";
import UnauthenticatedRoutes from "./auth/UnauthenticatedRoutes";
import AuthenticatedRoutes from "./auth/AuthenticatedRoutes";
import SubCategoryAccordion from "./Pages/SubCategory";
import ProductList from "./Pages/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    // element:  window.location.hostname.toLowerCase() == 'mvp.systemtwosecurity.com' ?  <SignInSSO /> : <SignIn />,
    element: (
      <UnauthenticatedRoutes>
        <Login />
      </UnauthenticatedRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <UnauthenticatedRoutes>
        <Signup />
      </UnauthenticatedRoutes>
    ),
  },
  {
    path: "/*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/app",
    element: <AuthenticatedRoutes />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "homeSlider",
        element: <HomeSlider />,
      },
      {
        path: "categoryList",
        element: <CategoryList />,
      },
      {
        path: "subcategory",
        element: <SubCategoryAccordion />,
      },
      {
        path: "productList",
        element: <ProductList />,
      },
    ],
  },
]);
