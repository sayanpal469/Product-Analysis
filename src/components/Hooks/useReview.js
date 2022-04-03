import { useEffect, useState } from "react";

const useReview = (number) => {
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch(`Review.json`)
        .then(res => res.json())
        .then(data => {
            const reviewer = data.slice(0,number)
            setReviews(reviewer)
        })
    }, [])
    return [reviews, setReviews]
};

export default useReview;