import React, { useState } from "react";
import { RatingSelector } from "./RatingSelector";
import { Button } from "./shared/Button";
import { Card } from "./shared/Card";

interface FeedbackFormProps {
   addFeedback: (feedbackItem: { text: string; rating: number }) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ addFeedback }) => {
   const [enteredText, setEnteredText] = useState<string>("");
   const [enteredRating, setEnteredRating] = useState<number>(1);
   const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
   const [errorMessage, setErrorMessage] = useState<string>("");

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

   // Submit Form Handler
   const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newFeedbackItem = {
         text: enteredText,
         rating: enteredRating,
      };

      addFeedback(newFeedbackItem);

      // Clear form fields
      setEnteredText("");
      setEnteredRating(1);
      setIsButtonDisabled(true);
      setErrorMessage("");
   };

   //
   return (
      <Card>
         <form onSubmit={handleSubmitForm}>
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
                  text="Send"
                  version="primary"
                  type="submit"
                  isDisabled={isButtonDisabled}
               />
            </div>
            {errorMessage && <div className="message">{errorMessage}</div>}
         </form>
      </Card>
   );
};
