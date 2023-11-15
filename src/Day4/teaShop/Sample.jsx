import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Sample = () => {
  const [inputvalue, setValue] = useState("");
  return (
    <div>
      <TextField
        value={inputvalue}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Button variant="contained" onClick={() => console.log(inputvalue)}>
        Submit
      </Button>
      <Typography>{inputvalue}</Typography>
    </div>
  );
};

export default Sample;
