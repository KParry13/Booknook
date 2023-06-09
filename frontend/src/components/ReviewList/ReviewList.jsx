import React from "react";

const ReviewList = ({bookReviews}) => {
    console.log(bookReviews)
    return (
        <div>
            <h5>Average Rating: {bookReviews.average_rating}</h5>
            <h4>Review List</h4>
            {bookReviews.reviews[0] && bookReviews.reviews.map((item => 
            <p>
            {item.text} 
            {item.rating} 
            </p>
            ))}
            
            
        </div>
    )
}

export default ReviewList;