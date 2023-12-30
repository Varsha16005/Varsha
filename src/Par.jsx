import React from "react";
import {Container,Typography,Paper,} from "@mui/material";
import InputForm from "./InputForm";
const Par = () => {
  return (
    <Container
      sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
      maxWidth="xs"
    >
      <Paper sx={{ px: 4, py: 5, my: "auto" }} elevation={4} component={Paper}>
        <Typography align="center" component="h1" variant="h4">
          Input Form Example
        </Typography>
        <InputForm />
      </Paper>
    </Container>
  );
};
export default Par;