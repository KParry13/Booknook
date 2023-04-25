import React from "react";
import "./SearchBar.css";

const SearchBar = ({searchTerm = "", setSearchTerm, handleSubmit}) => {
    
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="searchForm"> 
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;
