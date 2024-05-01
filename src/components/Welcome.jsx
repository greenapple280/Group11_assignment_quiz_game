import React from "react";
import "../index.css";
import Button from "./Button/Button";
import Login from "./Login.jsx";

const Welcome = ({name}) => {
   return (
      <div className="comtainer">
         <h1>Welcome {name} to the language quiz </h1>
         <p>You answer 10 questions about Swedish vocabulary</p>
         <p>Choose the correct answer from 4 multiple choice</p>
         <Button> START</Button>
      </div>
   );
};

export default Welcome;
