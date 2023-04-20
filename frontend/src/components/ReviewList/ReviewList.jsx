import React from "react";

const ReviewList = ({bookReviews, bookDetails}) => {
    console.log(bookReviews)
    return (
        <div>
            <h3>Average Rating: {bookDetails.volumeInfo.averageRating}</h3>
            {/* <h4>Review List {bookReviews} </h4> */}
        </div>
    )
}

export default ReviewList;