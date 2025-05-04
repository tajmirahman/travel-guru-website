import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import backgroundImage from '../assets/images/Rectangle 1.png'



const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div
                className="bg-cover bg-center  md:h-[350px] md:px-6"
                style={{
                    backgroundImage: `url(${backgroundImage})`,

                }}
            >
                <Header />
                <Navber />
            </div>

            <Outlet></Outlet>

            

        </div>

    );
};

export default MainLayout;