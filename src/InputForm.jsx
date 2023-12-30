import React, { useRef } from "react";
import {TextField,Button} from "@mui/material";
const InputForm = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      input1: inputRef1.current.value,
      input2: inputRef2.current.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField variant="outlined" margin="normal" fullWidth label="Input 1" inputRef={inputRef1}/>
      <TextField variant="outlined" margin="normal" fullWidth label="Input 2" inputRef={inputRef2}/>
      <Button type="submit" fullWidth variant="contained" color="primary">Submit</Button>
    </form>
  );
};
export default InputForm;