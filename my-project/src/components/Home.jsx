import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Destination from './Pages/Destination';


const Home = () => {
    const data= useLoaderData();
    console.log(data)

    return (
        <div>
            <Destination></Destination>
        </div>
    );
};

export default Home;