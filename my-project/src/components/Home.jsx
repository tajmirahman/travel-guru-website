import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categoroy from './Categoroy';

const Home = () => {

    const categories = useLoaderData();


    return (
        <div>
            <div className='flex flex-row justify-center gap-3 py-6'>
                {
                    categories.map(category => <Categoroy category={category}></Categoroy>)
                }
            </div>

          <Outlet></Outlet>

        </div>
    );
};

export default Home;