import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Plants from "./Pages/Plants/Plants";
import Blogs from "./Pages/Blogs/Blogs";
import AllPlats from "./Pages/Home/ShopSection/allPlants/allPlats";
import NewArivvals from "./Pages/Home/ShopSection/newArivvals/newArivvals";
import Sale from "./Pages/Home/ShopSection/Sale/Sale";
import Houseplants from "./Pages/Home/ShopSection/Categories/Houseplants";
import Accessories from "./Pages/Home/ShopSection/Categories/Accessories";
import PotterPlants from "./Pages/Home/ShopSection/Categories/PotterPlants";
import Seeds from "./Pages/Home/ShopSection/Categories/Seeds";
import SmallPlants from "./Pages/Home/ShopSection/Categories/SmallPlants";
import BigPlants from "./Pages/Home/ShopSection/Categories/BigPlants";
import Succulents from "./Pages/Home/ShopSection/Categories/Succulents";
import Trerrariums from "./Pages/Home/ShopSection/Categories/Trerrariums";
import Gardening from "./Pages/Home/ShopSection/Categories/Gardening";
import PlantDetail from "./PlantDetail";
import Small from "./Pages/Home/ShopSection/Size/Small";
import Medium from "./Pages/Home/ShopSection/Size/Medium";
import Large from "./Pages/Home/ShopSection/Size/Large";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        index: true,
                        element: <AllPlats />
                    },
                    {
                        path: "newArivvals",
                        element: <NewArivvals />
                    },
                    {
                        path: "sale",
                        element: <Sale />
                    },
                    {
                        path: "housePlants",
                        element: <Houseplants />
                    },
                    {
                        path: "potterPlants",
                        element: <PotterPlants />
                    },
                    {
                        path: "seeds",
                        element: <Seeds />
                    },
                    {
                        path: "smallPlants",
                        element: <SmallPlants />
                    },
                    {
                        path: "bigPlants",
                        element: <BigPlants />
                    },
                    {
                        path: "succulents",
                        element: <Succulents />
                    },
                    {
                        path: "trerrariums",
                        element: <Trerrariums />
                    },
                    {
                        path: "gardening",
                        element: <Gardening />
                    },
                    {
                        path: "accessories",
                        element: <Accessories />
                    },
                    {
                        path: "small",
                        element: <Small />
                    },
                    {     
                        path: "medium",
                        element: <Medium />
                    },
                    {
                        path: "large",
                        element: <Large/>
                    }
                ]
            },
            {
                path: "plants/:id",
                element: <PlantDetail />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/plants",
                element: <Plants />
            },
            {
                path: "/blogs",
                element: <Blogs />
            }
        ]
    }
]);

export default router;
