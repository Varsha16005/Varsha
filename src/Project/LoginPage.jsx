import React from "react";
import { Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
// import backgroundImage from "./Project/Images/loginbg.jpeg";

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

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jNHsL6h9XdhCxmESytaUcomceE02xP_AOH-JaUCC01bGc5a2axS5puueeubRA1J2DDk&usqp=CAU")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Paper
          elevation={10}
          style={{
            width: "35%",
            height: "500px",
            marginTop: "100px",
            // backgroundImage: url(${backgroundImage}),
          }}
        >
          <center>
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
              placeholder="Enter email"
            />
            <br></br>
            <br></br>
            <br></br>
            <TextField
              label="Password"
              type="password"
              id="outlined-basic"
              variant="outlined"
              autoComplete="new-password"
              placeholder="Enter password"
            >
              Email Id &emsp;&emsp;
            </TextField>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/home">
              <Button variant="contained">Login</Button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/signup" underline="hover">
              {"Don't have an account?"}
            </Link>
            &emsp;&emsp;&emsp;
            {/* <Link href="#" underline="hover">
          {"forgot password?"}
        </Link> */}
          </center>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;
