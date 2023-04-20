import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const BookDetailsPage = () => {
    const { bookId } = useParams()
    const [bookDetails, setBookDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchBookDetails();
    }, []);
    const fetchBookDetails = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes/${bookId}`
            );
            setBookDetails(response.data)
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <div>Book Details Page
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <div>
                <div>
                    <img src={bookDetails.volumeInfo.imageLinks.thumbnail}></img>
                    <h3>Title: {bookDetails.volumeInfo.title} </h3>
                    <h3>Author: {bookDetails.volumeInfo.authors}</h3>
                    <h4>Description: {bookDetails.volumeInfo.description}</h4>
                </div>
                <br></br>
                <div>
                    <h3>Average Rating: {bookDetails.volumeInfo.averageRating}</h3>
                    {/* <h4>Reviews: {bookDetails} </h4> */}
                </div>
            </div>  
        )}

        </div>
     );
}
 
export default BookDetailsPage;