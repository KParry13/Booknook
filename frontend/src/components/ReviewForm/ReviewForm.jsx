import React from "react";
import useCustomForm from "../../hooks/useCustomForm";

const defaultValues = {
    "book_id": "",
    "text": "",
    "rating": 0
}
const ReviewForm = ({ }) => {
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm();

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>

                </label>
            </form>

        </div>
     );
}
 
export default ReviewForm;