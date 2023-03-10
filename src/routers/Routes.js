import { createBrowserRouter } from "react-router-dom";
import ContentList from "../dashboard/contentList";
import PostContent from "../dashboard/postContent";
import Profile from "../dashboard/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";



export const routers = createBrowserRouter([
     {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>

            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
     },
     {
        path:"/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/dashboard",
                element:<Profile/>
            },
            {
                path:"/dashboard/content",
                element: <PostContent/>
            },
            {
                path:"/dashboard/contentList",
                element:<ContentList/>
            }
        ]
     }
])