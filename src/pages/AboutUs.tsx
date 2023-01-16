import { Card } from "../components/shared/Card";
import { Link } from "react-router-dom";

export const AboutUs: React.FC = () => {
   return (
      <Card>
         <div className="about">
            <h1>About Us</h1>
            <p>
               This is a <strong>React / TypeScript</strong> app where you can
               provide feedback about our services!
            </p>
            <p>
               <code>Version 1.0.0</code>
            </p>
         </div>
         <Link className="back-link" to="/">
            Back to Home
         </Link>
      </Card>
   );
};
