import React from "react";
import styles from "index.css";
import Button from "./Button/Button";

const Welcome = () => {
   return (
      <div className="comtainer">
         <h1>Welcome {Name} to the language quiz </h1>
         <p>You answer 10 questions about Swedish vocabulary</p>
         <p>Choose the correct answer from 4 multiple choice</p>
         <Button> START</Button>
      </div>
   );
};

export default Welcome;
