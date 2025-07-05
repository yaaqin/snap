import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import Mint from "../page/mint";
import { CreateBrand } from "../page/brand/create";
import { CreateSeries } from "../page/series/create";

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
        path: '/series/create',
        element: <CreateSeries/>
    },
    {
        path: '/mint/:id',
        element: <Mint/>
    }
])
export default AppRoutes;