import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import StandardPackage from '../StandardPackage';
import Delux from '../Delux';
import SupperDelux from './SupperDelux';
import WhyChooseUs from './WhyChooseUs';
import OverView from './OverView';

const CardDetails = () => {
  const hotel = useLoaderData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 w-11/12 mx-auto my-6 gap-3'>
      <section className='col-span-8 '>
        <div>
          <h2 className='text-3xl font-bold'>Explore the evergreen forest</h2>
          <span className='flex items-center'>
            <FaMapMarkerAlt className='mr-2' /> {hotel.location}
          </span>
        </div>
        <div className='mt-3'>
          <figure className='w-full h-[400px]'>
            <img
              className='w-full h-[400px] object-cover rounded-lg'
              src={hotel.image}
              alt={hotel.title}
            />
          </figure>
        </div>

        <OverView></OverView>
        
      </section>

      <section className='col-span-4 '>
        <div className='space-y-2'>
          <StandardPackage />
          <Delux></Delux>
          <SupperDelux></SupperDelux>
          <WhyChooseUs></WhyChooseUs>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
