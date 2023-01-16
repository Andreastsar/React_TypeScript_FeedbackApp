import { FeedbackItem } from "./FeedbackItem";
import { FeedbackItem as item } from "../components/models/FeedbackData";

interface FeedbackListProps {
   feedback: item[];
   deleteFeedbackItemById: (id: number) => void;
   editFeedbackItemById: (item: item) => void;
}

export const FeedbackList: React.FC<FeedbackListProps> = ({
   feedback,
   deleteFeedbackItemById,
   editFeedbackItemById,
}) => {
   const deleteHandler = (id: number) => {
      deleteFeedbackItemById(id);
   };

   const editHandler = (item: item) => {
      editFeedbackItemById(item);
   };
   //
   return (
      <div className="feedback-list">
         {feedback.map((item) => {
            return (
               <FeedbackItem
                  key={item.id}
                  feedbackItem={item}
                  deleteFeedbackItem={deleteHandler}
                  editFeedbackItem={editHandler}
               />
            );
         })}
      </div>
   );
};
