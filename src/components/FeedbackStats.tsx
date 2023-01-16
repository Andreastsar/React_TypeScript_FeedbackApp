import { FeedbackItem as item } from "./models/FeedbackData";

interface FeedbackStatsProps {
   feedback: item[];
}

export const FeedbackStats: React.FC<FeedbackStatsProps> = ({ feedback }) => {
   // Calculate the sums of ratings
   let averageRatingSums = feedback.reduce((acc, item) => {
      return (acc += item.rating);
   }, 0);

   // Calculate average rating
   let averageRating;
   if (feedback.length > 0) {
      averageRating = averageRatingSums / feedback.length;
   } else {
      averageRating = 0;
   }

   // Return
   return (
      <div className="feedback-stats">
         <h4>Reviews: ({feedback.length})</h4>
         <h4>
            Average Rating: {averageRating.toFixed(1).replace(/[.,]0$/, "")}
         </h4>
      </div>
   );
};
