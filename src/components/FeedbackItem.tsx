import { Card } from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { FeedbackItem as item } from "./models/FeedbackData";
import { useState } from "react";
import { Navigate } from "react-router-dom";

interface FeedBackItemProps {
   feedbackItem: item;
   deleteFeedbackItem: (id: number) => void;
   editFeedbackItem: (item: item) => void;
}

export const FeedbackItem: React.FC<FeedBackItemProps> = ({
   feedbackItem,
   deleteFeedbackItem,
   editFeedbackItem,
}) => {
   const [redirect, setRedirect] = useState(false);
   if (redirect) {
      return <Navigate to="/edit" />;
   }

   const deleteHandler = (id: number) => {
      deleteFeedbackItem(id);
   };

   const editHandler = (item: item) => {
      editFeedbackItem(item);
      setRedirect(true);
   };

   //
   return (
      <Card>
         <div className="num-display">{feedbackItem.rating}</div>

         {/* Edit Button */}
         <button
            className="edit"
            onClick={editHandler.bind(null, feedbackItem)}
         >
            <FaEdit color="blue" />
         </button>

         {/* Delete Button */}
         <button
            onClick={deleteHandler.bind(null, feedbackItem.id)}
            className="close"
         >
            <FaTimes color="red" />
         </button>
         <div className="text">{feedbackItem.text}</div>
      </Card>
   );
};
