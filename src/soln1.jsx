// Q1)Stateful class component:
// App.js

// import React from "react";
// class Ccomponent extends React.Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         <h1>Class Component:</h1>
//         <h2>Hello Everyone,Welcome To React</h2>
//       </div>
//     );
//   }
// }
// export default Ccomponent;
// -----------------------------------------------------------------------------------------

// Q2)Conditional rendering:
// Sample.jsx

// import React, { Component } from "react";
// import Button from "@mui/material/Button";
// class Sample extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   decrement = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         {this.state.count > 0 ? (
//           <Button variant="contained" onClick={this.decrement}>
//             Decrement
//           </Button>
//         ) : null}

//         <Button variant="contained" onClick={this.increment}>
//           Increment
//         </Button>
//       </div>
//     );
//   }
// }

// export default Sample;

// App.js
// import React from "react";
// import Sample from "./Sample";

// const App = () => {
//   return (
//     <div>
//       <Sample></Sample>
//     </div>
//   );
// };
// export default App;
// --------------------------------------------------------------------------------------

// Q3)Communication bw parent child:
// ParentComponent.jsx

// import React from "react";
// import ChildComponent from "./ChildComponent";

// class ParentComponent extends React.Component {
//   render() {
//     const message = "Hello from Parent!";

//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <ChildComponent message={message} />
//       </div>
//     );
//   }
// }

// export default ParentComponent;

// ChildComponent.jsx
// import React from 'react';

// class ChildComponent extends React.Component {
//   render() {
//     const { message } = this.props;
//     return (
//       <div>
//         <h2>Child Component</h2>
//         <p>Received from parent: {message}</p>
//       </div>
//     );
//   }
// }

// export default ChildComponent;

// App.js
// import React from "react";
// import ParentComponent from "./ParentComponent";

// function App() {
//   return (
//     <div>
//       <h1>App Component</h1>
//       <ParentComponent />
//     </div>
//   );
// }

// export default App;
// ------------------------------------------------------------------------------------

// Q4)Material UI Card:
// Sample.jsx

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions'; 
// import CardContent from '@mui/material/CardContent'; 
// import CardMedia from '@mui/material/CardMedia'; 
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// export default function Sample() {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia component="img" height="140"
//                 image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/EBnda3IIUzAJDMXe9 0eQQqbmJJyyw5uaqPyjJYna8yYStYSTmNCA+agBA+EsBXjrWNR0VxSpiJqlAODLDgubLLU o1vHdFxb9CHlUqXubGSaJ5DygjhNkonoClKUChbhm+HIqrg6iA8nEpDB/A7o1HR+ozCu938Ij mTMIp82Ckl+ /rjE3wp5woUA1wVtTHRbthQoZPY2ZeI4UKGhM//2Q=="
//                 alt="green iguana"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div"> SKCET
//                 </Typography>
//                 13
//                 <Typography variant="body2" color="text.secondary">
//                     SKCET is one of the finest colleges in South India.It is well known for it's infrastructure, academics and the placements offered. With Asia's second-largest library, SKCET is well -known for it's architecture and maintenance.
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//         </Card>
//     );
// }

// App.js
// import React from "react";
// import Sample from "./Sample";

// function App() {
//   return (
//     <div>
//       <Sample></Sample>
//     </div>
//   );
// }

// export default App;
// ---------------------------------------------------------------------------------------

// Q5)Custom Navigation Bar:
// Sample.jsx

// import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";
// const Navbar = () => {
//   const navbarStyle = {
//     backgroundColor: "blue", 
//   };

//   const navLinkStyle = {
//     color: "white",
//     textDecoration: "none",
//     marginRight: "10px",
//   };

//   return (
//     <AppBar position="static" style={navbarStyle}>
//       <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h6">Your Logo</Typography>
//         <div>
//         <a href="#" style={navLinkStyle}>
//             Home
//           </a>
//           <a href="#" style={navLinkStyle}>
//             About
//           </a>
//           <a href="#" style={navLinkStyle}>
//             Services
//           </a>
//           <a href="#" style={navLinkStyle}>
//             Contact
//           </a>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// App.js
// import React from "react";
// import Sample from "./Sample";

// function App() {
//   return (
//     <div>
//       <Sample></Sample>
//     </div>
//   );
// }

// export default App;
// -----------------------------------------------------------------------------------

// Q6)HTTP Requests:
// Sample.jsx

// import { useEffect, useState } from "react";
// export default function Sample() {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((res) => setUser(res));
//   });
//   return (
//     <div>
//       {user.map((user) => (
//         <div>
//           {user.name}, {user.id}, {user.email}
//         </div>
//       ))}
//     </div>
//   );
// }

// App.js

// import "./App.css";
// import Sample from "./Sample";
// function App() {
//   return (
//     <>
//       <Sample></Sample>
//     </>
//   );
// }
// export default App;
// -----------------------------------------------------------------------------------

// Q7)Dropdown menu:
// App.js

// import * as React from "react";
// const App = () => {
//   return (
//     <div>
//       <select style={{ border: "solid black" }}>
//         <option value="fruit">Fruit</option>
//         <option value="vegetable">Vegetable</option>
//         <option value="meat">Meat</option>
//         <option value="Groceries">Groceries</option>
//         <option value="Snacks">Snacks</option>
//         <option value="Footwears">Footwears</option>
//       </select>
//     </div>
//   );
// };
// export default App;
// ------------------------------------------------------------------------------------------------

// Q8)Routing:
// mainpage.jsx

// import React from 'react';
// import { Link } from "react-router-dom";
// const Mainpage = () => {
//     return (<>
//         <div>
//             <h1>This is Mainpage</h1>
//             <center><Link to="/Returnpage">Next Page</Link></center>
//         </div>
//     </>
//     );
// };
// export default Mainpage;

// returnpage.jsx
// import { Link } from "react-router-dom";
// const Returnpage = () => {
//     return (<>
//         <div>
//             <h1>This is Next Page</h1>
//             <center><Link to='/mainpage' >Back to mainpage</Link></center>
//         </div>
//     </>
//     );
// };
// export default Returnpage;

// App.js

// import Mainpage from "./Mainpage";
// import Returnpage from "./Returnpage";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Mainpage />}></Route>
//           <Route exact path="/Mainpage" element={<Mainpage />}></Route>
//           <Route exact path="/Returnpage" element={<Returnpage />}></Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;

// index.js

// import React from 'react';
// import ReactDOM from 'react-dom'; import App from './App';
// import './index.css';
// ReactDOM.render(
//     <App />, document.getElementById('root')
// );
// ---------------------------------------------------------------------------------------------------------------------

// Q9)Form validation:
// RegisterForm.jsx

// import React, { useState } from 'react';
// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label> Email:
//         <input type="text" name="email" value={formData.email} onChange={handleInputChange}
//           pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
//       </label>
//       <br />
//       <label> Password:
//         <input type="password" name="password" value={formData.password} onChange={handleInputChange}
//           pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}" />
//       </label>
//       <br />
//       {formData.email && !formData.email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) && (
//         <p>Email is not valid.</p>
//       )}
//       {formData.password && !formData.password.match(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}/) && (
//         <p>Password is not valid.</p>
//       )}
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default RegisterForm;

// App.js

// import RegisterForm from ".RegisterForm";
// function App() {
//   return (
//     <div>
//       <RegisterForm />
//     </div>
//   );
// }
// export default App;
// --------------------------------------------------------------------------------------------

// Q10)Fetch Display Material UI:
// userlist.jsx

// // Import necessary React and Material-UI components
// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// // Functional component
// function UserList() {
//     // State to store the fetched user data
//     const [users, setUsers] = useState([]);
//     // useEffect hook to fetch data when the component mounts
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/users');
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };
//         31
//         fetchData();
//     }, []); // Empty dependency array ensures useEffect runs only once when the component
//     mounts
//     // Render the component
//     return (
//         <TableContainer component={Paper}>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>User ID</TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Email</TableCell>
//                         <TableCell>Phone</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {users.map((user) => (
//                         <TableRow key={user.id}>
//                             <TableCell>{user.id}</TableCell>
//                             <TableCell>{user.name}</TableCell>
//                             <TableCell>{user.email}</TableCell>
//                             <TableCell>{user.phone}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }
// export default UserList;

// App.js

// import React from 'react'
// import UserList from './UserList'
// export default function App() {
//   return (
//     <div>
//         <UserList/>
//     </div>
//   )
// }
// --------------------------------------------------------------------------------------

// Q11)Invalid API Endpoint:
// App.js

// import React, { useState } from "react";
// function App() {
//   const [error, setError] = useState(null);
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/songs"
//       );
//       if (!response.ok) {
//         throw new Error("Invalid Endpoint");
//       }
//     } catch (error) {
//       setError(
//         <h1 style={{ display: "flex", justifyContent: "center" }}>
//           Invalid endpoint or error occurred.
//         </h1>
//       );
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>
//       {error && <h1>Error: {error}</h1>}
//     </div>
//   );
// }
// export default App;
// -------------------------------------------------------------------------------------------------------

// Q12)Font toggle context:
// App.js :

// import React from 'react'
// import { FontProvider } from './FontContext'
// import Nav from './Nav'
// import Hom from './Hom'
// import Footer from './Footer'
// export default function App() {
//   return (
//     <div>
//         <FontProvider>
//             <Nav/>
//             <Hom/>
//             <Footer/>
//         </FontProvider>
//     </div>
//   )
// }

// Nav.js :

// import React from 'react';
// import { useFont } from './FontContext';
// import { Button , Typography, Toolbar, AppBar }from '@mui/material';
// const Navbar = () => {
//   const { font, toggleFont } = useFont();
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ fontFamily: font }}>
//           App
//         </Typography>
//         <Button color="inherit" onClick={toggleFont}>
//           Toggle Font
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default Navbar;

// Hom.js :

// import React from 'react';
// import { useFont } from './FontContext';
// const Hom = () => {
//   const { font } = useFont();
//   return (
//     <div>
//       <h1 style={{ fontFamily: font }}>Home Component</h1>
//     </div>
//   );
// };
// export default Hom;

// Footer.js :

// import React from 'react';
// import { useFont } from './FontContext';
// import { Typography } from '@mui/material';
// const Footer = () => {
//   const { font } = useFont();
//   return (
//     <footer style={{ backgroundColor: 'purple', color: 'white' }}>
//       <Typography variant="body1" style={{ fontFamily: font }}>
//         &copy; 2023 My React App. All rights reserved.
//       </Typography>
//     </footer>
//   );
// };
// export default Footer;

// FontContext.js :

// import { createContext, useContext, useState } from 'react';
// export const FontContext = createContext();
// export const useFont = () => {
//   const context = useContext(FontContext);
//   if (!context) {
//     throw new Error('useFont must be used within a FontProvider');
//   }
//   return context;
// };
// export const FontProvider = ({ children }) => {
//   const [font, setFont] = useState('serif');
//   const toggleFont = () => {
//     setFont((prevFont) => (prevFont === 'serif' ? 'sans-serif' : 'serif'));
//   };
//   const value = { font, toggleFont };
//   return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
// };
// ------------------------------------------------------------------------------------------------

// Q13)Ref hooks and Forms:
// App.js

// import React, { useRef } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import {
//     TextField,
//     Button,
//     Container,
//     Typography,
//     CssBaseline,
//     Paper,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// // MUI theme
// const theme = createTheme();
// // Functional component definition
// const InputForm = () => {
//     // useRef to manage input references
//     const inputRef1 = useRef();
//     const inputRef2 = useRef();
//     // Function to handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Log values to the console
//         console.log({
//             input1: inputRef1.current.value,
//             input2: inputRef2.current.value,
//         });
//     };
//     // JSX for the form
//     return (
//         <form onSubmit={handleSubmit}>
//             {/* Input 1 */}
//             <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 label="Input 1"
//                 inputRef={inputRef1}
//             />
//             {/* Input 2 */}
//             <TextField
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 label="Input 2"
//                 inputRef={inputRef2}
//             />
//             {/* Submit button */}
//             <Button type="submit" fullWidth variant="contained" color="primary">
//                 Submit
//             </Button>
//         </form>
//     );
// };
// // Parent component definition
// const App = () => {
//     return (
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <Container
//                 sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
//                 maxWidth="xs"
//             >
//                 <Paper
//                     sx={{ px: 4, py: 5, my: "auto" }}
//                     elevation={4}
//                     component={Paper}
//                 >
//                     <Typography align="center" component="h1" variant="h4">
//                         Input Form Example
//                     </Typography>
//                     <InputForm />
//                 </Paper>
//             </Container>
//         </ThemeProvider>
//     );
// };
// const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(<App />);
// export default App;
// ----------------------------------------------------------------------------------------------------------------------

// Q14)Effect hooks component Lifecycle:
// LifecycleComponent.jsx

// import React, { useEffect } from 'react';
// const LifecycleComponent = () => {
//     // Component Mount Phase
//     useEffect(() => {
//         console.log('Component is mounted');
//         // Cleanup function (Unmount Phase)
//         return () => {
//             console.log('Component will unmount');
//         };
//     }, []); // Empty dependency array means this effect runs only once on mount
//     // Component Update Phase (every render)
//     useEffect(() => {
//         console.log('Component is updated');
//         44
//     });
//     return <div>Component Lifecycle Example</div>;
// };
// export default LifecycleComponent;

// App.js

// import React from "react";
// import LifecycleComponent from "./LifecycleComponent";
// const App = () => {
//   return (
//     <div>
//       <h1>React Lifecycle Example</h1>
//       <LifecycleComponent />
//     </div>
//   );
// };
// export default App;
// ---------------------------------------------------------------------------------------------------

// Q15)Controlled components and Forms:
// controlledForm.jsx

// import React, { useState } from 'react';
// const ControlledForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         message: '',
//     });
//     const formContainer = {
//         maxWidth: "400px",
//         border: "1px solid #ccc",
//     }
//     const form = {
//         display: "flex",
//         flexDirection: "column"
//     }
//     const label = {
//         marginBottom: "8px"
//     }
//     const textField = {
//         padding: "8px",
//         border: "1px solid #ccc",
//     }
//     const buttonStyle = {
//         backgroundColor: "#4caf50",
//         color: "white",
//         cursor: "pointer"
//     }
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data:', formData);
//     };
//     return (
//         <div className="form-container" style={formContainer} >
//             <h2>Contact Us</h2>
//             <form onSubmit={handleSubmit} style={form}>
//                 <label style={label}>First Name</label>
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} style={textField} />
//                 <br />
//                 <label style={label}>Last Name</label>
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} style={textField} />
//                 <br />
//                 <label style={label}>Email</label>
//                 <input style={textField} type="email" name="email" value={formData.email} onChange={handleInputChange} />
//                 <br />
//                 <label style={label}>Message</label>
//                 <textarea name="message" value={formData.message} onChange={handleInputChange} style={textField}></textarea>
//                 <br />
//                 <button type="submit" style={buttonStyle}>Submit</button>
//             </form>
//         </div >
//     );
// };
// export default ControlledForm;
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q16)Redux Counter

// ------------------------------------------------------------------------------------------------------------------

// Q17)Implement useState Hook:
// App.js

// import React, { useState } from "react";
// function RegistrationForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
//   };
//   return (
//     <div className="registration-form">
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default RegistrationForm;
// -----------------------------------------------------------------------------------------------------

// Q18)App.js
// import React, { useState, useEffect } from 'react';
// const ErrorBoundary = ({ children }) => {
//     const [hasError, setHasError] = useState(false);
//     const [error, setError] = useState(null);
//     const [errorInfo, setErrorInfo] = useState(null);
//     useEffect(() => {
//         const handleError = (error, errorInfo) => {
//             setHasError(true);
//             setError(error);
//             setErrorInfo(errorInfo);
//         };
//         if (hasError) {
//             setHasError(false);
//             setError(null);
//             setErrorInfo(null);
//             55
//         }
//         window.addEventListener('error', handleError);
//         return () => {
//             window.removeEventListener('error', handleError);
//         };
//     }, [hasError]);
//     if (hasError) {
//         return (
//             <div>
//                 <h2>Something went wrong!</h2>
//                 <p>{error.toString()}</p>
//                 <div>{errorInfo.componentStack}</div>
//             </div>
//         );
//     }
//     return <>{children}</>;
// };
// const ExampleComponent = () => {
//     const throwError = () => {
//         throw new Error('This is a deliberate error for demonstration purposes');
//     };
//     return (
//         <div>
//             <h1>Example Component</h1>
//             <button onClick={throwError}>Click me to throw an error</button>
//         </div>
//     );
// };
// const App = () => (
//     <ErrorBoundary>
//         <ExampleComponent />
//     </ErrorBoundary>
// );
// export default App;
// --------------------------------------------------------------------------------------------------------------------------

// Q19)Implementation of useState:
// counter.jsx

// import React, { useState } from 'react';
// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const increment = () => {
//         setCount(count + 1);
//     };
//     const decrement = () => {
//         setCount(count - 1);
//     };
//     const reset = () => {
//         setCount(0);
//     };
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
// };
// export default Counter;

// App.js

// import Counter from "./counter";
// function App() {
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <Counter />
//     </div>
//   );
// }
// export default App;
// -------------------------------------------------------------------------------------------------------

// Q20)Dynamic theming react context and useContext:
// App.js :

// App.js :

// import React from 'react'
// import ThemeToggle, { ThemeApp } from "./theme";
// export default function App() {
//   return (
//     <div>
//         <ThemeApp>
//           <ThemeToggle />
//         </ThemeApp>
//     </div>
//   )
// }

// theme.js :

// import React, { createContext, useContext, useState } from 'react';
// import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { CssBaseline } from '@mui/material';
// const ThemeContext = createContext();
// const lightTheme = createMuiTheme({
//     palette: {
//         mode: 'light',
//     },
// });
// const darkTheme = createMuiTheme({
//     palette: {
//         mode: 'dark',
//     },
// });
// export const ThemeApp = ({ children }) => {
//     const [theme, setTheme] = useState(lightTheme);
//     const toggleTheme = () => {
//         setTheme(theme === lightTheme ? darkTheme : lightTheme);
//     };
//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             <ThemeProvider theme={theme}>
//                 <CssBaseline />
//                 {children}
//             </ThemeProvider>
//         </ThemeContext.Provider>
//     );
// };
// const ThemeToggle = () => {
//     const { theme, toggleTheme } = useContext(ThemeContext);
//     return (
//         <div style={{ textAlign: 'center', position: 'absolute', top: '40%', left: '42%' }}>
//             <Button variant="contained" color="primary" onClick={toggleTheme}>
//                 {theme === lightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
//             </Button>
//         </div>
//     );
// };
// export default ThemeToggle;



// ------------------------------------------------------------------------------------------------------

// Q21)Dynamic Book search:

// App.js :

// import React from 'react'
// import { SearchProvider } from './SearchContext';
// import BookList from './BookList';
// export default function App() {
//   return (
//     <div>
//         <SearchProvider>
//           <BookList/>
//         </SearchProvider>
//     </div>
//   )
// }

// BookList.js :

// import React, { useEffect, useState } from 'react';
// import { useSearch } from './SearchContext';
// const BookList = () => {
//   const { searchQuery, setSearchQuery } = useSearch();
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setBooks(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);
//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Books"
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <ul>
//         {filteredBooks.map((book) => (
//           <li key={book.id}>{book.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default BookList;

// SearchContext.js :

// import React, { createContext, useContext, useState } from 'react';
// const SearchContext = createContext();
// export const SearchProvider = ({ children }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   return (
//     <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };
// export const useSearch = () => {
//   return useContext(SearchContext);
// };


// -----------------------------------------------------------------------------------------------------

// Q22)Optimize component rendering useMemo:
// App.js

// /*Place the code in 
// index.js if it doesn't work*/

// import { useState, useMemo } from "react";
// import ReactDOM from "react-dom/client";
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);
//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     68;
//     setTodos((t) => [...t, "New Todo"]);
//   };
//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };
// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// export default App;









