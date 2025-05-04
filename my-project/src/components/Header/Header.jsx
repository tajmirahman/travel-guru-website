import React from 'react';
import logoImg from '../../assets/images/logoTravel.avif'
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className="navbar gap-2 ">
            <div className="navbar-start ">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-white btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-sky-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to={'/news'}>News</NavLink>
                        <NavLink to={'/destination'}>Destination</NavLink>
                        <NavLink to={'/blog'}>Blog</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </ul>
                </div>
                <div>
                    <figure className='w-10 h-10 hidden md:block '>
                        <img className='w-10 h-10 object-cover' src={logoImg} alt="" />
                    </figure>
                </div>
            </div>

            <div className="navbar-center gap-2 hidden md:block text-white space-x-2 ">
                <NavLink to={'/news'}>News</NavLink>
                <NavLink to={'/destination'}>Destination</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </div>
            <div className="navbar-end gap-2">
                <div className="">
                    <input type="text" placeholder="Search" className="text-center border-2 border-gray-200 w-36 " />
                </div>
                <div>
                    <button className='py-1 px-2 bg-yellow-300'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;