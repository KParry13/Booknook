import React from "react";
import { Link } from "react-router-dom";

const ResultsList = ({searchResults}) => {
    console.log(searchResults)
    return ( 
        <div>
            <h2>Results</h2>
            {searchResults.map((book, index) => (
                <Link key={index} to={`/details/${book.id}`}>
                    <div >
                        <h3>{book.volumeInfo.title}</h3>
                    </div>
                </Link>
            ))} 
        </div>
     );
}
 
export default ResultsList;
