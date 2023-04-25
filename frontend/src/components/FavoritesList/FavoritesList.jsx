import React from "react";



const FavoritesList = ({user, favorites}) => {
    
    
    
    return ( 
        <div>
            <div>{user.username}'s Favorites!</div>
            {favorites &&
            favorites.map((book) => (
            <p key={book.id}>
            <img src={book.thumbnail_url}></img> {book.title}
            </p>
        ))}
        </div>
     );
}
 
export default FavoritesList;