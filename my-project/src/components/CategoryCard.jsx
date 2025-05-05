import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CategoryCard = () => {

    const data= useLoaderData();
    // console.log(data)

    const { category } = useParams();
    const [hotel,setHotel]=useState([]);

    useEffect(()=>{
        if(category){
            const filterCategory= [...data].filter(d=> d.category === category);
        setHotel(filterCategory);
        }
        else{
            setHotel(null)
        }
    },[category, data])



    

    return (
        <div>

            <h2>card ... {category}</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    hotel.map(hotel => <Card hotel={hotel}></Card>)
                }
            </div>
        </div>
    );
};

export default CategoryCard;