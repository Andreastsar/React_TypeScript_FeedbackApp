import { FeedbackItem } from "../components/models/FeedbackData";
import { RatingSelector } from "../components/RatingSelector";
import { Button } from "../components/shared/Button";
import { Card } from "../components/shared/Card";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

interface EditFeedbackProps {
   editItem: FeedbackItem;
   editFeedback: (feedbackItem: {
      id: number;
      text: string;
      rating: number;
   }) => void;
}

export const EditFeedback: React.FC<EditFeedbackProps> = ({
   editItem,
   editFeedback,
}) => {
   const [enteredText, setEnteredText] = useState<string>(editItem.text);
   const [enteredRating, setEnteredRating] = useState<number>(editItem.rating);
   const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState<string>("");
   const [editDone, setEditDone] = useState<boolean>(false);
   if (editDone) {
      return <Navigate to="/" />;
   }

   // Handler for review text
   const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Check if text is at least 10 chars
      if (enteredText.trim() === "") {
         setIsButtonDisabled(true);
         setErrorMessage("");
      } else if (enteredText.trim() !== "" && enteredText.trim().length <= 10) {
         setErrorMessage("Your review must be at least 10 characters long!");
         setIsButtonDisabled(true);
      } else {
         setErrorMessage("");
         setIsButtonDisabled(false);
      }
      setEnteredText(e.target.value);
   };

   // Edit form handler
   const submitEditHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const editedFeedbackItem = {
         id: editItem.id,
         text: enteredText,
         rating: enteredRating,
      };

      editFeedback(editedFeedbackItem);

      // Clear form fields
      setEnteredText("");
      setEnteredRating(1);
      setIsButtonDisabled(true);
      setErrorMessage("");
      setEditDone(true);
   };

   //
   return (
      <>
         <Card>
            <form onSubmit={submitEditHandler}>
               <h2>How would you rate our services?</h2>
               <RatingSelector
                  select={(incRating) => {
                     setEnteredRating(incRating);
                  }}
               />
               <div className="input-group">
                  <input
                     value={enteredText}
                     type="text"
                     placeholder="Write your review"
                     onChange={handleTextChange}
                  />
                  <Button
                     text="Save"
                     version="primary"
                     type="submit"
                     isDisabled={isButtonDisabled}
                  />
               </div>
               {errorMessage && <div className="message">{errorMessage}</div>}
            </form>
            <br />
            <Link to="/">Home</Link>
         </Card>
      </>
   );
};
