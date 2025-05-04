import React from 'react';
import coxsImg from '../assets/images/Rectangle 1.png'
import sriMongol from '../assets/images/Sreemongol.png'
import sunDorBon from '../assets/images/sundorbon.png'

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className='w-[150px] h-[200px] mx-auto relative border-2 border-sky-500 hover:border-yellow-300 overflow-hidden'>
                    <div >
                        <figure className='w-[150px] h-[200px]'>
                            <img
                                src={coxsImg}
                                className="w-[150px] h-[200px] object-cover" />
                        </figure>
                    </div>
                    <div className='absolute top-40'>
                        <h1 className='text-white font-bold uppercase '>Cox's Bazar</h1>
                    </div>

                </div>
                <div className="absolute left-24 right-24 top-24 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='w-[150px] h-[200px] mx-auto relative border-2 border-sky-500 hover:border-yellow-300 overflow-hidden'>
                    <div >
                        <figure className='w-[150px] h-[200px]'>
                            <img
                                src={sunDorBon}
                                className="w-[150px] h-[200px] object-cover" />
                        </figure>
                    </div>
                    <div className='absolute top-40'>
                        <h1 className='text-white font-bold uppercase '>Sundarbans</h1>
                    </div>

                </div>
                <div className="absolute left-24 right-24 top-24 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className='w-[150px] h-[200px] mx-auto relative border-2 border-sky-500 hover:border-yellow-300 overflow-hidden'>
                    <div >
                        <figure className='w-[150px] h-[200px]'>
                            <img
                                src={sriMongol}
                                className="w-[150px] h-[200px] object-cover" />
                        </figure>
                    </div>
                    <div className='absolute top-40'>
                        <h1 className='text-white font-bold uppercase '>Sreemangal</h1>
                    </div>

                </div>
                <div className="absolute left-24 right-24 top-24 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;