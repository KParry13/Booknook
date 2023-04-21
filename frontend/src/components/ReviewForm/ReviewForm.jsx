import React from "react";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ReviewForm = ({bookId, fetchBookReviews} ) => {
const [user, token] = useAuth();
const defaultValues = {
    "book_id": bookId,
    "text": "",
    "rating": ""
}

    const [formData, handleInputChange, handleSubmit] = useCustomForm(defaultValues,postNewReview);

    async function postNewReview(){
        
        try {
            let response = await axios.post("http://127.0.0.1:5000/api/user_reviews", formData, {
                headers: {
                  Authorization: "Bearer " + token,
                },
              })
              console.log(response.data)
              fetchBookReviews()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Review:{""}
                    <input
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Rating:{}
                    <input
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    />
                </label>
                <button>Add Review</button>
            </form>

        </div>
     );
}
 
export default ReviewForm;