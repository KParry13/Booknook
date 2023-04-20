import React from "react";
import { Link } from "react-router-dom"

const FavoritesList = ({user, favorites, setFavorites}) => {

    return ( 
        <div>
            <div>{user.username}'s Favorites!</div>
            {favorites &&
            favorites.map((book) => (
            <p key={book.id}>
            {book.thumbnail} {book.author} {book.title}
            </p>
        ))}
        </div>
     );
}
 
export default FavoritesList;