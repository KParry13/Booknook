import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const fetchBooks = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );
        setSearchResults(response.data.items);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchBooks();
    };
   
    return (
      <div className="container">
        <h1>Search Page!</h1>
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
        />
        <ResultsList searchResults={searchResults} />
      </div>
    );
  };
 
export default SearchPage;