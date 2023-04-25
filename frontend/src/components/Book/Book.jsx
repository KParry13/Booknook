import React, { useState } from "react";

const Book = ({bookDetails, bookReviews, newFavorite}) => {
const [addFav, setAddFav] = useState("active")

function handleFavorite(){
    if(addFav === "active"){
        setAddFav(newFavorite)
    }
}
    return ( 
        <div>
            <img src={bookDetails.volumeInfo.imageLinks.thumbnail}></img>
            <br></br>
            <h3>Title: {bookDetails.volumeInfo.title} </h3>
            <h3>Author: {bookDetails.volumeInfo.authors}</h3>
            <br></br>
            <h4>Description: {bookDetails.volumeInfo.description}</h4>
            <br></br>
            <h3>{bookReviews.favorited ? <div>Favorited</div>
             : <div>Not Favorited</div>
            } </h3>
            <h3>{bookReviews.favorited ? null
             : <button type='button' className={addFav} onClick={handleFavorite}>Add Favorite
                <div>{newFavorite}</div>
                </button>
            } </h3>
            
        {/* {bookReviews.favorited ? "condition was true": "conditionis false"} */}
        </div>

     );
}
 
export default Book;