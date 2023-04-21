import React from "react";

const ReviewList = ({bookReviews, bookDetails}) => {
    console.log(bookReviews)
    return (
        <div>
            {bookReviews.reviews.map((item => 
                <p>
            <h5>Average Rating: {item.rating}</h5>
            <h4>Review List</h4>
                 {item.text} 
                </p>
            ))}
            
            
        </div>
    )
}

export default ReviewList;