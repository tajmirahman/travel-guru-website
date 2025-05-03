import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>
    }
])

export default routes;