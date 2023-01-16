import { useState } from "react";

interface RatingSelectorProps {
   select: (num: number) => void;
}

export const RatingSelector: React.FC<RatingSelectorProps> = ({ select }) => {
   const [selectedRating, setSelectedRating] = useState<number>(1);

   // Handle the selected value for the rating
   const selectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedRating(+e.target.value);

      // pass the selected value to parent component
      select(+e.target.value);
   };

   //
   return (
      <ul className="rating">
         <li>
            <input
               type="radio"
               id="n1"
               name="rating"
               value="1"
               checked={selectedRating === 1}
               onChange={selectorHandler}
            />
            <label htmlFor="n1">1</label>
         </li>
         <li>
            <input
               type="radio"
               id="n2"
               name="rating"
               value="2"
               checked={selectedRating === 2}
               onChange={selectorHandler}
            />
            <label htmlFor="n2">2</label>
         </li>
         <li>
            <input
               type="radio"
               id="n3"
               name="rating"
               value="3"
               checked={selectedRating === 3}
               onChange={selectorHandler}
            />
            <label htmlFor="n3">3</label>
         </li>
         <li>
            <input
               type="radio"
               id="n4"
               name="rating"
               value="4"
               checked={selectedRating === 4}
               onChange={selectorHandler}
            />
            <label htmlFor="n4">4</label>
         </li>
         <li>
            <input
               type="radio"
               id="n5"
               name="rating"
               value="5"
               checked={selectedRating === 5}
               onChange={selectorHandler}
            />
            <label htmlFor="n5">5</label>
         </li>
         <li>
            <input
               type="radio"
               id="n6"
               name="rating"
               value="6"
               checked={selectedRating === 6}
               onChange={selectorHandler}
            />
            <label htmlFor="n6">6</label>
         </li>
         <li>
            <input
               type="radio"
               id="n7"
               name="rating"
               value="7"
               checked={selectedRating === 7}
               onChange={selectorHandler}
            />
            <label htmlFor="n7">7</label>
         </li>
         <li>
            <input
               type="radio"
               id="n8"
               name="rating"
               value="8"
               checked={selectedRating === 8}
               onChange={selectorHandler}
            />
            <label htmlFor="n8">8</label>
         </li>
         <li>
            <input
               type="radio"
               id="n9"
               name="rating"
               value="9"
               checked={selectedRating === 9}
               onChange={selectorHandler}
            />
            <label htmlFor="n9">9</label>
         </li>
         <li>
            <input
               type="radio"
               id="n10"
               name="rating"
               value="10"
               checked={selectedRating === 10}
               onChange={selectorHandler}
            />
            <label htmlFor="n10">10</label>
         </li>
      </ul>
   );
};
