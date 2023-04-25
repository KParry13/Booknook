import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Book from "../../components/Book/Book";
import ReviewList from "../../components/ReviewList/ReviewList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import useAuth from "../../hooks/useAuth";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [bookReviews, setBookReviews] = useState({});
  const [newFavorite, setNewFavorite] = useState([])
  const [user, token] = useAuth();

  const fetchBookDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setBookDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookReviews = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:5000/api/books/${bookId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setBookReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function postNewFavorite() {
    try {
        const defaultValues = {
            book_id: bookDetails.id,
            title: bookDetails.volumeInfo.title,
            thumbnail_url: bookDetails.volumeInfo.imageLinks.thumbnail
        }
        let response = await axios.post(
          "http://127.0.0.1:5000/api/user_favorites",
          defaultValues,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
          console.log(response.data)
          setNewFavorite(response.data)
    } catch (error) {
        
    }
}

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]);

  useEffect(() => {
    fetchBookReviews();
  }, [bookId]);

  return (
    <div>
     <h2>Book Details Page</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <Book bookDetails={bookDetails} bookReviews={bookReviews} newFavorite={newFavorite} />
          </div>
          <br></br>
          <div>
            <ReviewList bookReviews={bookReviews} bookDetails={bookDetails} />
          </div>
          <br></br>
          <div>
            <ReviewForm bookId={bookId} fetchBookReviews={fetchBookReviews} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailsPage;
