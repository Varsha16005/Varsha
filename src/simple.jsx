import React, { useState } from "react";

const simple = () => {
  const [currvalue, setState] = useState(Kaioken);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => setState(currvalue === "Kaioken" ? "Super" : "Kaioken")}
      />
      <h1>{currentvalue}</h1>
    </div>
  );
};

export default simple;
