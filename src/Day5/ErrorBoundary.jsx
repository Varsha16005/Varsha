import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorListener = (event) => {
      setError(event.error || new Error("Unknown error"));
    };

    window.addEventListener("error", errorListener);

    return () => {
      window.removeEventListener("error", errorListener);
    };
  }, []);

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  return children;
};

export default ErrorBoundary;
