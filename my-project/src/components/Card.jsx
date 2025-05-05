import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink, } from 'react-router-dom';

const Card = ({ hotel }) => {

    const {id,cost,title,location,image,rating}=hotel || {};





    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt="Hotel room"
                />
                <div className="absolute top-2 left-2 bg-white text-gray-800 px-2 py-1 rounded flex items-center text-sm shadow">
                    <FaMapMarkerAlt className="mr-1 text-purple-600" />
                    {location}
                </div>
                
            </div>
            {/* onClick={()=>navigate('/tour/details')} */}
            <div className="p-4">
                <NavLink to={`/tour/details/${id}`}><h2  className="text-lg font-semibold text-gray-900">
                    {title}
                </h2></NavLink>
                <div className="text-sm text-gray-500 mb-2">
                    <span className="text-purple-600 font-medium">{rating}</span>{" "}
                    (1214 reviews)
                </div>
                <div className="text-xl font-bold text-purple-700">
                    $99.00 <span className="text-sm font-normal text-gray-500">{cost}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;