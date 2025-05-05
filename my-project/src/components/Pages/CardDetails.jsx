import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import StandardPackage from './StandardPackage';

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [hotel, setHotel] = useState({});

    useEffect(() => {
        if (data) {
            const findData = data.find(d => d.id == id);
            setHotel(findData)
        }
    }, [data, id])

    console.log(hotel)
    const { image,location } = hotel;




    return (
        <div className='grid grid-cols-1 md:grid-cols-12 w-11/12 mx-auto my-6 gap-3'>
            <section className='col-span-8'>
                <div>
                <h2 className='text-3xl font-bold'>Explore the evergreen forest</h2>
                <span className='flex items-center'>
                <FaMapMarkerAlt />{location}
                </span>
                </div>
                <div className='mt-3'>
                    <figure className='w-full h-[400px] '>
                        <img className='w-full h-[400px] object-cover rounded-lg' src={image} alt="" />
                    </figure>
                </div>
            </section>

            <section className='col-span-4'>
                <StandardPackage></StandardPackage>
            </section>

        </div>
    );
};

export default CardDetails;