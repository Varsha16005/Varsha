import React, { useState } from "react";
import apple from "./apple.jpeg";
import orange from "./orange.jpeg";
import { Button } from "@mui/material";
import "./Styles.css";

const ToggleImage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("This is an apple");

  const images = [apple, orange];

  const handleClick = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));

    setDisplayText((prevText) =>
      imageIndex === 0 ? "This is an orange" : "This is an apple"
    );
  };

  return (
    <div sx={{ backgroundColor: "red", paddingTop: "20px" }}>
      <center>
        <Button variant="contained" onClick={handleClick}>
          Toggle Image
        </Button>
        <br></br>
        <br></br>
        <img src={images[imageIndex]} alt="no text" />
        <br></br>
        <br></br>
        <h1>{displayText}</h1>
      </center>
    </div>
  );
};

export default ToggleImage;
