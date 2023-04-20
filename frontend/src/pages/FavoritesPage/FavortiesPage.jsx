import { useEffect, useState } from 'react';
import React from 'react'
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";

const FavoritesPage = () => {

    const [user, token] = useAuth();
    const [ favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
          try {
            let response = await axios.get(
            'http://127.0.0.1:5000/api/user_favorites',    
            {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
              setFavorites(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchFavorites();
  }, [token]);
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
 
export default FavoritesPage;