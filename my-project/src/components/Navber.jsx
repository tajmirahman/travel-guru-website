import React from 'react';
import coxsImg from '../assets/images/Rectangle 1.png'
import sriMongol from '../assets/images/Sreemongol.png'
import sunDorBon from '../assets/images/sundorbon.png'

const Navber = () => {
    return (
        <div className='md:flex justify-center items-center p-2 gap-3'>

            <div className='space-y-2 flex-1'>
                <h1 className='text-3xl font-bold text-white'>Cox'S Bazar</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi ratione beatae libero voluptates atque, hic impedit distinctio labore perspiciatis?</p>
                <button className='btn btn-warning'>Book Now</button>
            </div>



            <div className='flex-1'>
                <div className='relative w-full overflow-hidden'>
                    <div className='flex w-[450px] transition-all duration-300 snap-x scroll-smooth overflow-x-auto scrollbar-hide'>
                        <div id="slide1" className='snap-start'>
                            <div className='relative border-2 border-sky-300 hover:border-yellow-300'>
                                <div className="w-[250px] h-[200px]">
                                    <img src={coxsImg} className="w-[150px] h-[200px] object-cover" />
                                </div>
                                <div className='absolute top-40 left-2'>
                                    <h2 className='text-xl font-bold uppercase text-white'>Cox's Bazar</h2>
                                </div>
                            </div>
                        </div>

                        <div id="slide2" className='snap-start'>
                            <div className='relative border-2 border-sky-300 hover:border-yellow-300'>
                                <div className="w-[150px] h-[200px]">
                                    <img src={sriMongol} className="w-[150px] h-[200px] object-cover" />
                                </div>
                                <div className='absolute top-40 left-2'>
                                    <h2 className='text-xl font-bold uppercase text-white'>SreeMangal</h2>
                                </div>
                            </div>
                        </div>

                        <div id="slide3" className='snap-start'>
                            <div className='relative border-2 border-sky-300 hover:border-yellow-300'>
                                <div className="w-[150px] h-[200px]">
                                    <img src={sunDorBon} className="w-[150px] h-[200px] object-cover" />
                                </div>
                                <div className='absolute top-40 left-2'>
                                    <h2 className='text-xl font-bold uppercase text-white'>Sundarbans</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute left-10 right-10 top-1/2 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide3" className="btn btn-circle bg-sky-400">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-sky-400">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navber;