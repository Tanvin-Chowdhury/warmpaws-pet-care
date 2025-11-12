import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout"; 
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { 
        path: "/", 
        element: <Home />, 
        loader: () => fetch("/services.json")
    },
      { 
        path: "/services", 
        element: <Services />, 
        loader: () => fetch("/services.json") 
    },
      {
        path: "/services/:id",
        element: (
          <ProtectedRoute>
            <ServiceDetails />
          </ProtectedRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { 
    path: "/auth/login", 
    element: <Login/> 
},
    { path: "/auth/signup", 
        element: <Signup /> 
    },
    { path: "*", 
        element: <h2 className="p-8">404 - Not Found</h2> 
    },
]);

export default router;
