import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Book from '../../components/Book/Book';
import ReviewList from '../../components/ReviewList/ReviewList'
import ReviewForm from '../../components/ReviewForm/ReviewForm'

const BookDetailsPage = () => {
    const { bookId } = useParams()
    const [bookDetails, setBookDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [bookReviews, setBookReviews] = useState({})

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

    useEffect(() => {
        fetchBookReviews();
    }, []);
    const fetchBookReviews = async () => {
        try {
            let response = await axios.get(
                `http://127.0.0.1:5000/api/books/${bookId}`
            );
            setBookReviews(response.data)
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
                    <Book bookDetails={bookDetails}/>
                </div>
                <br></br>
                <div>
                    <ReviewList bookReviews={bookReviews} />
                </div>
            </div>  
        )}

        </div>
     );
}
 
export default BookDetailsPage;