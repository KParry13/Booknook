import { useEffect, useState } from 'react';
import React from 'react'
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";

const FavoritesPage = () => {

    const [user, token] = useAuth();
    const [favorites, setFavorites] = useState([]);

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
              console.log(response.data)
              setFavorites(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchFavorites();
  }, [token]);
    return ( 
        <div>
            <FavoritesList 
            user={user}
            favorites={favorites}
            setFavorites={setFavorites}
            
            />
        </div>
     );
}
 
export default FavoritesPage;

