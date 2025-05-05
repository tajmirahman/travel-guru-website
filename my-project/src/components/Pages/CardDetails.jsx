import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const data=useLoaderData();
    const {id}= useParams();
    const [hotel,setHotel]=useState({});

    useEffect(()=>{
        if(data){
            const findData= data.find(d=> d.id == id);
        setHotel(findData)
        }
    },[data, id])

    console.log(hotel)
    const {image}= hotel;




    return (
        <div className='grid grid-cols-1 md:grid-cols-12'>
            <section className='col-span-9'>
            <div>
                <img className='' src={image} alt="" />
            </div>
            </section>

            <section className='col-span-3'>
dsfsdfsdfsdfs
            </section>

        </div>
    );
};

export default CardDetails;