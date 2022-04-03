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
          <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
          <p className="mt-2 text-gray-600">{comment}</p>
        </div>
        <div className="flex justify-end mt-4">
          <Link to='./reviews' class="text-xl font-medium  bg-indigo-500 rounded-3xl py-2 px-4 text-white">Explore Review</Link>
        </div>
      </div>
    );
};

export default HomeReview;