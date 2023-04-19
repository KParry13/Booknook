import React from "react";


const SearchBar = ({searchTerm = "", setSearchTerm, handleSubmit}) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}
 
export default SearchBar;
