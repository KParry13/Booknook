import React, { useState } from "react";
import "./Book.css"

const Book = ({bookDetails, bookReviews, newFavorite, postNewFavorite}) => {
const [addFav, setAddFav] = useState("active")

function handleFavorite(){
    if(addFav === "active"){
        setAddFav(newFavorite)
    }
}
    return ( 
        <div className="detail">
            <img src={bookDetails.volumeInfo.imageLinks.thumbnail}></img>
            <h3>Title: {bookDetails.volumeInfo.title} </h3>
            <h3>Author: {bookDetails.volumeInfo.authors}</h3>
            <h4>Description: {bookDetails.volumeInfo.description}</h4>
            <h3>{bookReviews.favorited ? <div className="favorited">Favorited</div>
             : <div className="notFavorited">Not Favorited</div>
            } </h3>
            <h3>{bookReviews.favorited ? null
             : <button type='button' className={addFav} onClick={() => postNewFavorite()}>Add Favorite
                <div>{newFavorite}</div>
                </button>
            } </h3>
            
        {/* {bookReviews.favorited ? "condition is true": "condition is false"} */}
        </div>

     );
}
 
export default Book;