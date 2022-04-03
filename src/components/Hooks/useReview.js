import { useEffect, useState } from "react";

const useReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch(`Review.json`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            console.log(data);
        })
    }, [])
    return [reviews, setReviews]
};

export default useReview;