import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import backgroundImage from '../assets/images/Rectangle 1.png'


const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: '350px'
            }}
        >
            <Header />
            <Navber />
        </div>
        <Outlet />
    </div>
    
    );
};

export default MainLayout;