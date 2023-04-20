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
                {/* <img src={bookDetails.} */}
                <h3>Title: {bookDetails.title} </h3>
                <h3>Author: {bookDetails.author}</h3>
            </div>
        )}

        </div>
     );
}
 
export default BookDetailsPage;