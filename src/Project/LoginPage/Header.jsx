import React from "react";
import { createTheme, Paper, Typography, Container } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const Header = () => {
  return (
    <Container>
      <Paper elevation={3}>
        <Typography style={{ fontFamily: theme.typography.fontFamily }}>
          Login Page
        </Typography>
      </Paper>
    </Container>
  );
};

export default Header;
