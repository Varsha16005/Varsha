import { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Display count={count} />
      <Buttons
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
    </div>
  );
};

export default Counter;
