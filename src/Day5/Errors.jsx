import { Typography } from "@mui/material";
import { useState } from "react";

const ErrorComponent = () => {
  const [error, setError] = useState("");

  const throwError = () => {
    setError("This is an intentional error for demonstration purposes");
    // throw new Error("This is an intentional error for demonstration purposes");
  };

  if (error) {
    return <Typography variant="h3">{error}</Typography>;
  }

  return (
    <div>
      <h1>Component with Error</h1>
      <button onClick={throwError}>Trigger Error</button>
    </div>
  );
};

export default ErrorComponent;
