import { createBrowserRouter } from "react-router-dom";
import ContentDetails from "../pages/ContentDetails";
import ContentList from "../dashboard/contentList";
import PostContent from "../dashboard/postContent";
import DashboardLayout from "../layouts/DashboardLayout";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdatePage from "../dashboard/UpdatePage";



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
                path:"/home/:id",
                element:<ContentDetails/>

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
                element:<PostContent/>
            },
            {
                path:"/dashboard/content",
                element: <PostContent/>
            },
            {
                path:"/dashboard/contentList",
                element:<ContentList/>
            },
            {
                path:"/dashboard/contentList/:id",
                element: <UpdatePage/>
            }
        ]
     }
])