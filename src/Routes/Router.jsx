import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                Component: HomeLayout,
            }
        ]
    },
    {
        path: "/auth",
        element: <h2>Authentication layout</h2> 
    },
    {
        path: "/services",
        element: <h2>Service layout</h2> 
    },
    {
        path: "/profile",
        element: <h2>Profile layout</h2> 
    },
    {
        path: "/*",
        element: <h2>Error 404</h2> 
    },
])

export default router;