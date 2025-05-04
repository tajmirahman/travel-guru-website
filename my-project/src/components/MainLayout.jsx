import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';


const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;