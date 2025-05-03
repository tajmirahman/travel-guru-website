import React from 'react';
import logoImg from '../assets/images/icons/logoTravel.avif'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div>
                    <figure className='w-20 h-20'>
                        <img className='w-20 h-20 object-cover' src={logoImg} alt="" />
                    </figure>
                </div>
            </div>

            <div className="navbar-center gap-2">
                <Link to={'/news'}>News</Link>
                <Link to={'/destination'}>Destination</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div className="navbar-end gap-2">
                <div className="">
                    <input type="text" placeholder="Search" className="text-center border-2 border-gray-200" />
                </div>
                <div>
                    <button className='btn'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;