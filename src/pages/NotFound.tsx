import { Card } from "../components/shared/Card";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
   return (
      <Card>
         <h1>Sorry, this page does not exist.</h1>
         <p>
            Check your address in the browser or go to: <Link to="/">Home</Link>
         </p>
      </Card>
   );
};
