import React from 'react';
import { Link } from 'react-router-dom';
import HomeReview from '../HomeReview/HomeReview';
import useReview from '../Hooks/useReview';
import banner from './img/banner.png'

const Home = () => {
    const [reviews, setReviews] = useReview(3)

    return (
        <div className='' style={{}}>
            <div className='py-32 bg-gray-100 h-full grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-4 md:justify-items-around content-center'>
                <div className='order-2 md:order-1'>
                    <div className='p-10'>
                        <h1 className='text-4xl'>Product analytics with pre-built reports and guided setup</h1>
                        <p className='text-2xl mt-4'>Know which changes to make in your app without spending time building reports.</p>

                        <button type="button" class="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">TAKE A TOUR</button>
                    </div>
                </div>
                <div className='flex order-1 md:order-2 justify-center items-center'>
                    <img className=''  src={banner} alt="" />
                </div>
            </div>

            <div className='mt-20 mb-20'>
                <h1 className='text-center text-4xl text-blue-600 font-bold font'>Customer Review</h1>
                   <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-14 mt-10'>
                        {
                            reviews.map(review => <HomeReview key={review.id} review={review}></HomeReview>)
                        }
                    </div> 
            </div>
        </div>
    );
};

export default Home;