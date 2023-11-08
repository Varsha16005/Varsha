import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="px-4 py-2 bg-red-500"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button className="px-4 py-2 bg-red-500" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
