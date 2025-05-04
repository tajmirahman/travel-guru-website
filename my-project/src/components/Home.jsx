import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Pages/Category';
import Hotel from './Pages/Hotel';




const Home = () => {
    const {categories,hotelData}= useLoaderData();
    console.log(categories)

    return (
        <div className='w-11/12 mx-auto my-6'>
            <h2 className='md:text-3xl font-bold text-center '>Explore our hot deals</h2>
           
            
            <div className='flex flex-row justify-center gap-4'>
                {
                    categories && categories.map(category=> <Category category={category}></Category>)
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                   hotelData.map(hotel=> <Hotel hotel={hotel}></Hotel>) 
                }
            </div>
        </div>
    );
};

export default Home;