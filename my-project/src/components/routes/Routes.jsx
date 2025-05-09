import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Home";
import CategoryCard from "../CategoryCard";
import CardDetails from "../Pages/CardDetails/CardDetails";
import { hotelDetailsLoader } from "../../loader";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categoryData.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <CategoryCard></CategoryCard>,
                        loader: () => fetch('../hotelData.json')
                    },

                ]
            }

        ]
    },
    {
        path: '/tour/details/:id',
        element: <CardDetails></CardDetails>,
        loader: hotelDetailsLoader,
    }





])

export default routes;