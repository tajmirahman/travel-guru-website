import React from 'react';
import coxsImg from '../assets/images/Rectangle 1.png'
import sriMongol from '../assets/images/Sreemongol.png'
import sunDorBon from '../assets/images/sundorbon.png'

const Navber = () => {
    return (
        <div className='flex justify-between items-center gap-2 mt-3'>
            <div className='space-y-2'>
                <h1 className='text-3xl font-bold'>Cox'S Bazar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi ratione beatae libero voluptates atque, hic impedit distinctio labore perspiciatis?</p>
                <button className='btn'>Book Now</button>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='relative'>
                        <div className="w-full h-[300px]">
                            <img
                                src={coxsImg}
                                className="w-full h-[300px] object-cover" />
                        </div>
                        <div className='absolute top-56 left-2'>
                            <h2 className='text-xl font-bold uppercase text-white'>Cox's Bazar</h2>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className='relative'>
                        <div className="w-[300px] h-[250px]">
                            <img
                                src={sriMongol}
                                className="w-full h-[300px] object-cover" />
                        </div>
                        <div className='absolute top-56 left-2'>
                            <h2 className='text-xl font-bold uppercase text-white'>Sreemangal</h2>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='relative'>
                        <div >
                            <figure className="w-[300px] h-[250px]">
                            <img
                                src={sunDorBon}
                                className="w-full h-[300px] object-cover" />
                            </figure>
                        </div>
                        <div className='absolute top-56 left-2'>
                            <h2 className='text-xl font-bold uppercase text-white'>Sundorbon</h2>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navber;