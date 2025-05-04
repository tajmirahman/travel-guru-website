
import Slider from './Slider';


const Navber = () => {



    return (
        <div className='md:flex justify-around items-center p-2 space-y-4'>

            <div className='space-y-2 flex-1 '>
                <h1 className='text-3xl font-bold text-white'>Cox'S Bazar</h1>
                <p className='text-white '>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className='btn btn-warning'>Book Now</button>
            </div>



            <div className='flex-1'>
                <Slider></Slider>
            </div>

        </div>
    );
};

export default Navber;