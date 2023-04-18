import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const SearchBar = (props) => {

    const { searchBooks,  }

    return ( 
        <Link to="/search">
            <p>Search</p>
        </Link>
     );
}
 
export default SearchBar;
