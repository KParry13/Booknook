import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const SearchPage = (props) => {
    const [user, token] = useAuth();
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          let response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=<''>", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setBooks(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      fetchBooks();
    }, [token]);
    return (
      <div className="container">
        {console.log(user)}
        <h1>Home Page for {user.username}!</h1>
        {books &&
          books.map((book) => (
            <p key={book.id}>
              {book.title} {book.author} {book.year}
            </p>
          ))}
      </div>
    );
  };
 
export default SearchPage;