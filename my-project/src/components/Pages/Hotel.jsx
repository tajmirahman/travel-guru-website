import React from 'react';

const Hotel = ({ hotel }) => {
    console.log(hotel);
    // const {description,location,image,location,cost}=hotel;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="relative">
                <img
                    src={hotel.image}
                    alt="Hotel"
                    className="h-48 w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 text-white flex items-center gap-1 text-sm bg-black bg-opacity-40 px-2 py-1 rounded">
                    {/* <FaMapMarkerAlt className="text-white" /> */}
                    {hotel.location}
                </div>
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-sm font-semibold px-2 py-1 rounded-full">
                    50%
                </div>
            </figure>

            <div className="card-body p-4">
                <h2 className="card-title text-lg">{hotel.title}</h2>
                <p className="text-purple-600 text-sm">
                    4.8/5 Excellent <span className="text-gray-400">(1214 reviews)</span>
                </p>
                <p className="text-xl font-bold">$99.00 <span className="text-sm font-normal text-gray-500">Price starts from</span></p>
            </div>
        </div>
    );
};

export default Hotel;