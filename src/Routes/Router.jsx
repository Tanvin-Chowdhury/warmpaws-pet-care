import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ServicePanel from "../Pages/ServicePanel/ServicePanel";
import HomePage from "../Pages/HomePage/HomePage";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import CardDetails from "../Pages/CardDetails";
import ServicePanelCard from "../Pages/ServicePanel/ServicePanelCard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '',
                element: <HomePage></HomePage>
            },

            {
                path: 'services',
                element: <ServicePanel />,
                loader: () => fetch("/services.json").then(res => res.json())
            },

            {
                path: 'profile',
                element: <MyProfile></MyProfile>
            },

            {
                path: "auth",
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/auth/register',
                        element: <Register></Register>
                    }
                ]
            },

            {
                path: "card-details/:id",
                element: <CardDetails></CardDetails>
            },

            {
                path: "*",
                element: <h2 className="text-center mt-20 text-2xl">Error 404: Page not found</h2> 
            },
        ]
    },
    
])

export default router;