import React, { useState } from "react";
const Button = ({ initialButtonText, initialButtonColor, disabled }) => {
  const [buttonText, setButtonText] = useState(initialButtonText);
  const [buttonColor, setButtonColor] = React.useState(initialButtonColor);

  const onClickHandler = () => {
    setButtonText("You clicked me!"), setButtonColor("btn-info");
  };
  return (
    <div>
      <button
        type="button"
        disabled={disabled}
        onClick={onClickHandler}
        className={buttonColor}
      >
        {buttonText}
      </button>
      <h2>Button</h2>
    </div>
  );
};

export default Button;
