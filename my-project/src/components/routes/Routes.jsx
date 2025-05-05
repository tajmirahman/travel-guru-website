import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Home";
import CategoryCard from "../CategoryCard";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/categoryData.json'),
                children: [
                    {
                        path:'/category/:categoryName',
                        element:<CategoryCard></CategoryCard>
                    }
                ]
            }
            
        ]
    },
    




])

export default routes;