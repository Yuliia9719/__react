import React, { useState } from "react";
import randomizer from "../utils/randomizer.js";

const Button = ({ min, max }) => {
  const [num, setNum] = useState(randomizer(min, max));
  const generateRandomNum = () => {
    setNum(randomizer(min, max));
  };
  return (
    <div>
      <h3>
        {num}
      </h3>
      <button type="button" onClick={generateRandomNum}>
        Generate number
      </button>
    </div>
  );
};

export default Button;
