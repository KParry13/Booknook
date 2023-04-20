import React from "react";

const Book = ({bookDetails}) => {
    return ( 
        <div>
            <img src={bookDetails.volumeInfo.imageLinks.thumbnail}></img>
            <h3>Title: {bookDetails.volumeInfo.title} </h3>
            <h3>Author: {bookDetails.volumeInfo.authors}</h3>
            <h4>Description: {bookDetails.volumeInfo.description}</h4>
        </div>
     );
}
 
export default Book;