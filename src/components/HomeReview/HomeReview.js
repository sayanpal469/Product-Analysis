import React from 'react';
import { Link } from 'react-router-dom';

const HomeReview = ({review}) => {
    const {picture, comment, name, rating} = review

    return (
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
        <div className="flex justify-center md:justify-end -mt-16">
          <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={picture}/>
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Rating: {rating}</h2>
          <p className="mt-2 text-gray-600">{comment}</p>
        </div>
        <div className="flex justify-end mt-4">
          <p class="text-xl font-medium text-indigo-500">{name}</p>
        </div>
      </div>
    );
};

export default HomeReview;