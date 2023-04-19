import React from "react";

const ResultsList = ({searchResults}) => {
    console.log(searchResults)
    return ( 
        <div>
            <h2>Results</h2>
            {searchResults.map((book, index) => (
                <div key={index}>
                    <h3>{book.items[0].volumeInfo.title}</h3>
                </div>
            ))} 
        </div>
     );
}
 
export default ResultsList;

