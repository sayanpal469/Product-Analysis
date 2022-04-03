import React, { useEffect, useState } from 'react';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview(6)
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-6'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;