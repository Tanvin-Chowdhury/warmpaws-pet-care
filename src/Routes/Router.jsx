import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ServicePanel from "../Pages/ServicePanel/ServicePanel";
import HomePage from "../Pages/HomePage/HomePage";
import MyProfile from "../Pages/MyProfile/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: '/services',
                element: <ServicePanel></ServicePanel>,
                loader: async () => {
                    const res = await fetch('/services.json');
                    return res.json();  
                },
            },
            {
                path: 'profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: "*",
                element: <h2 className="text-center mt-20 text-2xl">Error 404: Page not found</h2> 
            },
        ]
    },
    
])

export default router;