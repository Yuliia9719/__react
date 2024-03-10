import { useState } from "react";
import Button from "./components/Button.jsx";

const App = () => {
  const [count, setCounter] = useState(0);
  const incrementCount = () => {
    setCounter(count + 1);
  };

  return (
    <div>
      <h1>
        Count: {count}
      </h1>
      <input type="text" value={count} />
      <Button onClick={incrementCount} />
    </div>
  );
};

export default App;
