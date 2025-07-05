import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import Mint from "../page/mint";
import { CreateBrand } from "../page/brand/create";
import { CreateSeries } from "../page/series/create";
import BrandVerify from "../page/brand/verify";
import Explore from "../page/explore";
import About from "../page/about";
import Museum from "../page/museum";
import Collection from "../page/collection";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/brand/create',
        element: <CreateBrand/>
    },
    {
        path: '/brand/verify',
        element: <BrandVerify/>
    },
    {
        path: '/series/create',
        element: <CreateSeries/>
    },
    {
        path: '/museum',
        element: <Museum/>
    },
    {
        path: '/collection',
        element: <Collection/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/explore',
        element: <Explore/>
    },
    {
        path: '/mint/:id',
        element: <Mint/>
    }
])
export default AppRoutes;