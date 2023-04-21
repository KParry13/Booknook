import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Book from '../../components/Book/Book';
import ReviewList from '../../components/ReviewList/ReviewList'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import useAuth from "../../hooks/useAuth";


const BookDetailsPage = () => {
    const { bookId } = useParams();
    const [bookDetails, setBookDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [bookReviews, setBookReviews] = useState({});
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm();

    const fetchBookDetails = async () => {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes/${bookId}`
            );
            setBookDetails(response.data)
            // console.log(response.data)
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const fetchBookReviews = async () => {
        try {
            let response = await axios.get(
                `http://127.0.0.1:5000/api/books/${bookId}`,{
                    headers: {
                      Authorization: "Bearer " + token,
                    },
                  }
            );
            setBookReviews(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        fetchBookDetails();
    }, []);

    useEffect(() => {
        fetchBookReviews();
    }, []);

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
                    <ReviewList bookReviews={bookReviews} bookDetails={bookDetails}/>
                </div>
            </div>  
        )}

        </div>
     );
}
 
export default BookDetailsPage;