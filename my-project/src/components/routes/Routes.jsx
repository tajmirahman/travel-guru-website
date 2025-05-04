import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Home";
import Destination from "../Pages/Destination";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/destination',
                element:<Destination></Destination>
            }
            
            

        ]
    },
    
])

export default routes;