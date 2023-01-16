import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { FeedbackForm } from "./components/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import FeedbackData from "./FeedbackData";
import { Header } from "./components/Header";
import { AboutUs } from "./pages/AboutUs";
import { ImInfo } from "react-icons/im";
import { NotFound } from "./pages/NotFound";
import { FeedbackItem } from "./components/models/FeedbackData";
import { EditFeedback } from "./pages/EditFeedback";

function App() {
   const [feedbackData, setFeedbackData] =
      useState<FeedbackItem[]>(FeedbackData);

   const [editItem, setEditItem] = useState<FeedbackItem>({
      id: 0,
      text: "",
      rating: 0,
   });

   // Edit a Feedback Item
   const editFeedbackHandler = (item: FeedbackItem) => {
      setEditItem(item);
   };

   // Delete a Feedback Item
   const deleteFeedbackHandler = (id: number) => {
      if (window.confirm("Are you sure you want to delete this?")) {
         setFeedbackData(feedbackData.filter((item) => item.id !== id));
      }
   };

   // Add a new Feedback Item through form
   const addFeedbackHandler = (item: { text: string; rating: number }) => {
      setFeedbackData((prev) => {
         return [
            {
               id: feedbackData.length + 1,
               text: item.text,
               rating: item.rating,
            },
            ...prev,
         ];
      });
   };

   //
   const saveEditedFeedbackItem = (item: FeedbackItem) => {
      // Remove the old item from the list
      setFeedbackData(feedbackData.filter((old) => old.id !== item.id));

      // Append the edited item to the list
      setFeedbackData((prev) => {
         return [
            {
               id: item.id,
               text: item.text,
               rating: item.rating,
            },
            ...prev,
         ];
      });
   };

   // Return
   return (
      <>
         <BrowserRouter>
            <Header />
            <div className="container">
               {/* Routes */}
               <Routes>
                  {/* Home Route */}
                  <Route
                     path="/"
                     element={
                        <>
                           <FeedbackForm addFeedback={addFeedbackHandler} />
                           <FeedbackStats feedback={feedbackData} />
                           <FeedbackList
                              feedback={feedbackData}
                              deleteFeedbackItemById={deleteFeedbackHandler}
                              editFeedbackItemById={editFeedbackHandler}
                           />
                        </>
                     }
                  ></Route>

                  {/* Edit Feedback Item */}
                  <Route
                     path="/edit"
                     element={
                        <EditFeedback
                           editFeedback={saveEditedFeedbackItem}
                           editItem={editItem}
                        />
                     }
                  />

                  {/* About us Route */}
                  <Route path="/aboutus" element={<AboutUs />} />

                  {/* Page Not Found Route */}
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </div>
            <footer>
               <Link className="about-us-link" to="/aboutus">
                  <ImInfo />
                  About Us
               </Link>
            </footer>
         </BrowserRouter>
      </>
   );
}

export default App;
