import React from "react";
import {
  createTheme,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
//import backgroundImage from "./Project/Images/loginbg.jpeg";

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
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        style={{
          width: "35%",
          height: "500px",
          marginTop: "50px",
          //backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Typography variant="h1" style={{ fontSize: "50px" }}>
          Login Page
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
        />
        <br></br>
        <br></br>
        <br></br>
        <TextField
          label="Password"
          type="password"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter password"
        >
          Email Id &emsp;&emsp;
        </TextField>
        <br></br>
        <br></br>
        <br></br>
        <Button variant="contained">Login</Button>
        <br></br>
        <br></br>
        <br></br>
        <Link href="#" underline="hover">
          {"Don't have an account?"}
        </Link>
        &emsp;&emsp;&emsp;
        <Link href="#" underline="hover">
          {"forgot password?"}
        </Link>
      </Paper>
    </ThemeProvider>
  );
};

export default Header;
