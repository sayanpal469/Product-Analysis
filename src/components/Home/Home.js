import React from 'react';
import useReview from '../Hooks/useReview';
import banner from './img/banner.png'
const Home = () => {
    const [reviews, setReviews] = useReview([])

    return (
        <div className='' style={{}}>
            <div className='py-32 bg-gray-100 h-full grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 md:justify-items-around content-center'>
                <div className='order-2 md:order-1'>
                    <div>
                        <h1 className='text-6xl'>Analysis to product</h1>
                    </div>
                </div>
                <div className='flex order-1 md:order-2 justify-center items-center'>
                    <img className=''  src={banner} alt="" />
                </div>
            </div>

            <div className='mt-20 mb-20'>
                <h1 className='text-center text-4xl text-blue-600 font-bold font'>Customer Review</h1>
                   <div className='grid grid-cols-3 px-14 mt-10'>

                    </div> 
            </div>
        </div>
    );
};

export default Home;