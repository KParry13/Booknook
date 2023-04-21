import React from "react";

const Book = ({bookDetails, bookReviews}) => {

    return ( 
        <div>
            <img src={bookDetails.volumeInfo.imageLinks.thumbnail}></img>
            <h3>Title: {bookDetails.volumeInfo.title} </h3>
            <h3>Author: {bookDetails.volumeInfo.authors}</h3>
            
            <h3>{bookReviews.favorited ? <div>Favorited</div>
             : <div>Not Favorited</div>
            } </h3>
            <h4>Description: {bookDetails.volumeInfo.description}</h4>
        {/* {bookReviews.favorited ? "condition was true": "conditionis false"} */}
        </div>

     );
}
 
export default Book;