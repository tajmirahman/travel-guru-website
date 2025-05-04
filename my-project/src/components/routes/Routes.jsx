import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";

import Destination from "../Pages/Destination";
import Category from "../Pages/Category";
import Home from "../Home";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async()=> {
                    const categoryRes= await fetch('/categoryData.json');
                    const categories= await categoryRes.json();

                    const hotelRes= await fetch('/hotelData.json');
                    const hotelData= await hotelRes.json();

                    return {categories,hotelData}
                }
                
            },
            
            {
                path:'/destination',
                element:<Destination></Destination>,
                
                
            }
        ]
    },
    
    
])

export default routes;