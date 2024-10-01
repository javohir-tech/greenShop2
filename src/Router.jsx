import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Plants from "./Pages/Plants/Plants";
import Blogs from "./Pages/Blogs/Blogs";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/plants",
                element:<Plants/>
            },
            {
                path:"/blogs",
                element:<Blogs/>
            }
        ]
    }
])
export default router