//import React from "react";
// import {
//   createTheme,
//   ThemeProvider,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Link,
// } from "@mui/material";
// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });
// const Signup = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Paper
//         elevation={3}
//         style={{
//           width: "35%",
//           height: "500px",
//         }}
//       >
//         <center>
//           <Typography variant="h1" style={{ fontSize: "50px" }}>
//             Sign Up
//           </Typography>
//           <br></br>
//           <br></br>
//           <img src="data:image/png;base64,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" />
//           <TextField
//             id="outlined-basic"
//             label="Firstname"
//             type="text"
//             variant="outlined"
//           />
//           &emsp;&emsp;&emsp;
//           <TextField
//             id="outlined-basic"
//             label="Lastname"
//             type="text"
//             variant="outlined"
//           />
//           <br></br>
//           <br></br>
//           <TextField
//             id="outlined-basic"
//             label="Email"
//             type="email"
//             variant="outlined"
//           />
//           <br></br>
//           <br></br>
//           <TextField
//             label="Password"
//             type="password"
//             id="outlined-basic"
//             variant="outlined"
//             placeholder="Enter password"
//           />
//           <br></br>
//           <br></br>
//           <br></br>
//           <Button variant="contained">Sign Up</Button>
//           <br></br>
//           <br></br>
//           <Link href="#" underline="hover">
//             {"Already have an account?"}
//           </Link>
//         </center>
//       </Paper>
//     </ThemeProvider>
//   );
// };

// export default Signup;

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
const Signup = () => {
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
          }}
        >
          <center>
            <Typography variant="h1" style={{ fontSize: "50px" }}>
              Sign Up
            </Typography>
            <br></br>
            <br></br>
            <TextField
              id="outlined-basic"
              label="Firstname"
              type="text"
              variant="outlined"
              placeholder="Enter firstname"
            />
            &emsp;&emsp;&emsp;
            <TextField
              id="outlined-basic"
              label="Lastname"
              type="text"
              variant="outlined"
              placeholder="Enter lastname"
            />
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
            <TextField
              label="Password"
              type="password"
              id="outlined-basic-password"
              variant="outlined"
              autoComplete="new-password"
              placeholder="Enter password"
            />
            <br></br>
            <br></br>
            <Link to="/home">
              <Button variant="contained">Sign Up</Button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/" underline="hover">
              {"Already have an account?"}
            </Link>
          </center>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Signup;
