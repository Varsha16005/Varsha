// SEM EXAM :

// FOR ALL QUESTIONS - index.js:

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Q1 : Class Component :

App.js :

import React from 'react'
import ClassComponent from './ClassComponent'
export default function App() {
  return (
    <div>
        <ClassComponent/>
    </div>
  )
}

ClassComponent.js :

import React , { Component} from "react";
class ClassComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Class Component:</h1>
        <h2>Hello Everyone</h2>
      </div>
    );
  }
}
export default ClassComponent;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2 : Conditional Rendering :

App.js :

import React from 'react'
import Conditional from './Conditional'
export default function App() {
  return (
    <div>
        <Conditional/>
    </div>
  )
}

Conditional.js :

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Conditional extends Component {
    state = { 
        count: 0, 
        name: "Zero" 
    }
    changeCount() {
        if (this.state.count === 0)
            return "Zero";
        else if (this.state.count === 10) 
            return "Ten";
        else
            return this.state.count;
    }
    changeColor1() {
        let str = "btn btn-";
        if (this.state.count === 0) {
            str += "danger";
        }
        else {
            str += "success";
        }
        return str;
    }
    changeColor2() {
        let str = "btn btn-"; 
        if (this.state.count === 10) {
            str += "danger";
        }
        else {
            str += "success";
        }
        return str;
    }
    render() {
        return (
            <div style={{textAlign:'center',padding:50}}>
                <h1 style={{padding:100}}> Conditional Rendering:</h1>
                <button 
                    className={this.changeColor1()}
                    style={{width:100,height:50}} 
                    disabled={this.state.count===0} 
                    onClick={() =>{ this.setState({ count: this.state.count - 1 }) }}
                >
                    SUB 
                </button>
                <span style={{padding:50,fontSize:27}}>{this.changeCount()}</span>
                <button 
                    className={this.changeColor2()} 
                    style={{width:100,height:50}}
                    disabled={this.state.count===10}
                    onClick={() => { this.setState({ count: this.state.count + 1 }) }}
                >
                    ADD
                </button>
            </div >
        );
    }
}
export default Conditional;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q3 : Parent Child Components :

App.js :

import React from 'react'
import Parent from './Parent'
export default function App() {
  return (
    <div>
        <Parent/>
    </div>
  )
}

Parent.js :

import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    state = { name: "", } 
    handleCallback = (childData) =>{ 
        this.setState({name: childData}) 
    } 
  render() {
    const {name} = this.state;
    return (
      <div style={{textAlign:'center'}}>
        <h1>PARENT-CHILD COMMUNICATION</h1> 
        <Child parentCallback = {this.handleCallback}/> 
        {name} 
      </div>
    )
  }
}

Child.js :

import React, { Component } from 'react'
export default class Child extends Component {
    onTrigger = (e) => { 
        this.props.parentCallback(e.target.myname.value);
        e.preventDefault(); 
    } 
  render() {
    return (
      <div>
        <form onSubmit = {this.onTrigger}>
            <input type = "text" name = "myname" placeholder = "Enter Name"/>
            <br></br><br></br>
            <input type = "submit" value = "Submit"/> 
            <br></br><br></br>
        </form>
      </div>
    )
  }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q4 : Material UI Card :

App.js :

import React from 'react'
import CardComp from './CardComp'
export default function App() {
  return (
    <div>
        <CardComp/>
    </div>
  )
}

CardComp.js :

import React from 'react'
import { CardContent, CardMedia, Typography, Card } from '@mui/material';
export default function CardComp() {
  return (
    <Card sx={{maxWidth:600}}>
      <CardMedia component='img' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB6O_lfxeRec_iL5xnCkXpYVSKcbR2ouoMA&usqp=CAU'/>
        <CardContent>
           <Typography variant='h1' color='text.primary'>
               Nature
           </Typography>
        </CardContent>
    </Card>
  )
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5 : Custom Navigation Bar :

App.js :

import React from 'react'
import Navbar from './Navbar'
export default function App() {
  return (
    <div>
        <Navbar/>
    </div>
  )
}

Navbar.js :

import React , {useState} from 'react'
import {AppBar,Avatar,Box,Button,IconButton, Menu,MenuItem,Toolbar,Tooltip,Typography} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu';
const pages = ['Products', 'Pricing', 'Blog']; 
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']; 
function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null); 
    const handleOpenNavMenu = (e) => { setAnchorElNav(e.currentTarget); }; 
    const handleOpenUserMenu = (e) => { setAnchorElUser(e.currentTarget); }; 
    const handleCloseNavMenu = () => { setAnchorElNav(null); }; 
    const handleCloseUserMenu = () => { setAnchorElUser(null); };
  return (
    <AppBar position="static"> 
        <Toolbar disableGutters> 
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> 
            <Typography 
                variant="h6" noWrap 
                component="a" href="/" 
                sx={{ 
                    mr: 2, 
                    display: { xs: 'none', md: 'flex' }, 
                    fontFamily: 'monospace', 
                    fontWeight: 700, 
                    letterSpacing: '.3rem', 
                    color:'inherit', 
                    textDecoration:'none', 
                }}>
                    SKCET 
            </Typography> 
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> 
            <IconButton 
                size="large" aria-label="account of current user" aria-controls="menu-appbar" 
                ariahaspopup="true" onClick={handleOpenNavMenu} color="inherit"> 
                <MenuIcon />
            </IconButton> 
            <Menu id="menuappbar" 
            anchorEl={anchorElNav} 
            anchorOrigin={{ 
            vertical: 'bottom', 
            horizontal: 'left', 
            }} 
            keepMounted transformOrigin={{ 
            vertical: 'top', 
            horizontal: 'left', 
            }} 
            open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ 
                display: { xs: 'block', md: 'none' }, 
            }}> 
            {pages.map((page) => ( 
                <MenuItem key={page} onClick={handleCloseNavMenu}> 
                    <Typography textAlign="center">{page}</Typography> 
                </MenuItem> 
            ))} 
            </Menu> 
            </Box> 
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> 
            <Typography variant="h5" noWrap component="a" href="" sx={{ 
            mr: 2,display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, 
            letterSpacing:'.3rem',color: 'inherit', textDecoration: 'none', 
            }}> 
                SKCET 
            </Typography> 
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
                {pages.map((page) => ( 
                    <Button key={page} 
                    onClick={handleCloseNavMenu} 
                    sx={{ my: 2, color: 'white', display: 'block' }} 
                    > 
                        {page} 
                    </Button> 
                ))} 
            </Box> 
            <Box sx={{ flexGrow: 0 }}> 
                <Tooltip title="Open settings"> 
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> 
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> 
                    </IconButton> 
                </Tooltip> 
                <Menu 
                    sx={{ mt: '45px' }} id="menuappbar" anchorEl={anchorElUser} 
                    anchorOrigin={{ vertical: 'top', horizontal: 'right', }} 
                    keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} 
                    open={Boolean(anchorElUser)} onClose={handleCloseUserMenu} 
                > 
                    {settings.map((setting) => ( 
                    <MenuItem key={setting} onClick={handleCloseUserMenu}> 
                        <Typography textAlign="center">{setting}</Typography> 
                    </MenuItem> 
                    ))}
                </Menu> 
            </Box> 
        </Toolbar> 
    </AppBar> 
  )
}
export default Navbar

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q6 : Fetch HTTP Requests :

App.js :

import React from 'react'
import Fetch from './Fetch'
export default function App() {
  return (
    <div>
        <Fetch/>
    </div>
  )
}

Fetch.js :

import { useEffect, useState } from "react"
export default function Fetch() {
    const [user, setUser] = useState([]); useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(res => res.json()) 
        .then(res => setUser(res)) 
    }) 
    console.log(user)
  return (
    <div className="main">
        {user.map(u => ( 
            <div>{u.name}&nbsp;-&nbsp;{u.id}&nbsp;-&nbsp;{u.email}</div> 
        ))}
    </div>
  )
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q7 : Drop-Down :

App.js :

import React from 'react'
import Dropdown from './Dropdown'
export default function App() {
  return (
    <div>
        <Dropdown/>
    </div>
  )
}

Dropdown.js :

import React from 'react';
import { styled } from '@mui/system';
const StyledSelect = styled('select')({
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
  border: '2px solid rgb(57, 19, 196)',
  borderRadius: '5px',
});
const Dropdown = () => {
  return (
    <div>
      <StyledSelect>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
        <option value="Groceries">Groceries</option>
        <option value="Snacks">Snacks</option>
        <option value="Footwears">Footwears</option>
      </StyledSelect>
    </div>
  );
};
export default Dropdown;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q8 : Routing In React :

App.js :

import React from 'react'
import MainPage from './MainPage'
export default function App() {
  return (
    <div>
        <MainPage/>
    </div>
  )
}

MainPage.js :

import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
export default function MainPage() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/About' element={<About/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

Home.js :

import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <br></br>
      <Link to='/About'><button>About</button></Link>
    </div>
  )
}

About.js :

import React from 'react'
export default function About() {
  return (
    <h1>This is About page</h1>
  )
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q9 : Form Validation :

App.js :

import React from 'react'
import RegisterForm from './RegisterForm'
export default function App() {
  return (
    <div>
        <RegisterForm/>
    </div>
  )
}

RegisterForm.js :

import React, { useState } from 'react';
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label> Email:
        <input type="text" name="email" value={formData.email} onChange={handleInputChange}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
      </label>
      <br />
      <label> Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange}
          pattern="^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}" />
      </label>
      <br />
      {formData.email && !formData.email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) && (
        <p>Email is not valid.</p>
      )}
      {formData.password && !formData.password.match(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}/) && (
        <p>Password is not valid.</p>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default RegisterForm;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q10 : Fetch display Material UI :

App.js :

import React from 'react'
import UserList from './UserList'
export default function App() {
  return (
    <div>
        <UserList/>
    </div>
  )
}

UserList.js :

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
export default function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
            console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
);
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q11 : Error Handling for Invalid API :

App.js :

import React from 'react'
import Greeting from './Greeting'
export default function App() {
  return (
    <div>
        <Greeting/>
    </div>
  )
}

Greeting.js :

import React, { useState } from "react";
export default function Greeting() {
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const response = await fetch(
            https://jsonplaceholder.typicode.com/songs
        );
        if (!response.ok) {
            throw new Error("Invalid Endpoint");
        }
        } catch (error) {
            setError(
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                    Invalid endpoint or error occurred.
                </h1>
            );
            console.error(error);
        }
    };
    return (
        <div>
            <button
                onClick={fetchData}
                style={{
                    padding: "10px",
                    margin: "10px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "blue",
                }}
            >
            Fetch Data
            </button>
            {error && <h1>Error: {error}</h1 >}
        </div>
    );
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q12 : Font Toggle Context :

App.js :

import React from 'react'
import { FontProvider } from './FontContext'
import Nav from './Nav'
import Hom from './Hom'
import Footer from './Footer'
export default function App() {
  return (
    <div>
        <FontProvider>
            <Nav/>
            <Hom/>
            <Footer/>
        </FontProvider>
    </div>
  )
}

Nav.js :

import React from 'react';
import { useFont } from './FontContext';
import { Button , Typography, Toolbar, AppBar }from '@mui/material';
const Navbar = () => {
  const { font, toggleFont } = useFont();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ fontFamily: font }}>
          App
        </Typography>
        <Button color="inherit" onClick={toggleFont}>
          Toggle Font
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

Hom.js :

import React from 'react';
import { useFont } from './FontContext';
const Hom = () => {
  const { font } = useFont();
  return (
    <div>
      <h1 style={{ fontFamily: font }}>Home Component</h1>
    </div>
  );
};
export default Hom;

Footer.js :

import React from 'react';
import { useFont } from './FontContext';
import { Typography } from '@mui/material';
const Footer = () => {
  const { font } = useFont();
  return (
    <footer style={{ backgroundColor: 'purple', color: 'white' }}>
      <Typography variant="body1" style={{ fontFamily: font }}>
        &copy; 2023 My React App. All rights reserved.
      </Typography>
    </footer>
  );
};
export default Footer;

FontContext.js :

import { createContext, useContext, useState } from 'react';
export const FontContext = createContext();
export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};
export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('serif');
  const toggleFont = () => {
    setFont((prevFont) => (prevFont === 'serif' ? 'sans-serif' : 'serif'));
  };
  const value = { font, toggleFont };
  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q13 : Ref Hooks and Forms :

App.js :

import React from 'react'
import Par from './Par'
export default function App() {
  return (
    <div>
        <Par/>
    </div>
  )
}

Par.js :

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

InputForm.js :

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

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q14 : Effect Hooks And Component Lifecycle :

App.js :

import React from 'react'
import LifecycleComponent from './LifecycleComponent'
export default function App() {
  return (
    <div>
        <LifecycleComponent/>
    </div>
  )
}

LifecycleComponent.js :

import React, { useEffect } from 'react';
const LifecycleComponent = () => {
    useEffect(() => {
        console.log('Component is mounted');
        return () => {
            console.log('Component will unmount');
        };
    }, []);
    useEffect(() => {
        console.log('Component is updated');
    });
    return <div>Component Lifecycle Example</div>;
};
export default LifecycleComponent;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q15 : Controlled Components and Forms :

App.js :

import React from 'react'
import ControlledForm from './ControlledForm'
export default function App() {
  return (
    <div>
        <ControlledForm/>
    </div>
  )
}

ControlledForm.js :

import React, { useState } from 'react';
const ControlledForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const formContainer = {
        maxWidth: "400px",
        border: "1px solid #ccc",
    }
    const form = {
        display: "flex",
        flexDirection: "column"
    }
    const label = { marginBottom: "8px"}
    const textField = {
        padding: "8px",
        border: "1px solid #ccc",
    }
    const buttonStyle = {
        backgroundColor: "#4caf50",
        color: "white",
        cursor: "pointer"
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value});
    };
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    };
    return (
    <div className="form-container" style={formContainer}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} style={form}>
            <label style={label}>First Name</label>
            <input type="text" name="firstName" value={formData.firstName}
            onChange={handleInputChange} style={textField}/>
            <br />
            <label style={label}>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName}
            onChange={handleInputChange} style={textField}/>
            <br />
            <label style={label}>Email</label>
            <input style={textField} type="email" name="email" value={formData.email}
            onChange={handleInputChange}/>
            <br />
            <label style={label}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleInputChange}
            style={textField}></textarea>
            <br />
            <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    </div>
    );
};
export default ControlledForm;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q16 : Redux Counter :

App.js :

import React from 'react'
import { Provider } from 'react-redux';
import Counter from './counter';
import store from './store';
export default function App() {
  return (
    <div>
        <Provider store={store}>
                <Counter/>
         </Provider>
    </div>
  )
}

action.js :

function increment() {
    return {
    type: 'inc'
    };
    }
    function decrement() {
    return {
    type: 'dec'
    };
    }
    export { increment, decrement };

counter.js :

import { connect } from "react-redux";
import { increment, decrement } from "./action";
function Counter({ count, increment, decrement }) {
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}
function Mapto(state) {
    return {
    count: state.count
    };
}
const dis = { increment, decrement };
export default connect(Mapto, dis)(Counter);

Reducer.js :

function Reducer(state = { count: 0 }, action) {
    switch (action.type) {
    case 'inc':
    return { count: state.count + 1 };
    case 'dec':
    return { count: state.count - 1 };
    default:
    return state;
    }
    }
    export default Reducer;

store.js :

import { createStore } from "redux";
import Reducer from "./Reducer";
const Store = createStore(Reducer);
export default Store;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q17 : UseState - Registration Form :

App.js :

import React from 'react'
import Form from './Form'
export default function App() {
  return (
    <div>
        <Form/>
    </div>
  )
}

Form.js :

import React, { useState } from "react";
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(Name: ${name}\nEmail: ${email}\nPassword: ${password});
    };
    return (
    <div className="registration-form">
    <h1>Registration Form</h1>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
    </div>
    <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </div>
    <button type="submit">Submit</button>
    </form>
    </div>
    );
}
export default Form;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q18 : Error Boundary :

App.js :

import React from 'react'
import CustomErrorBoundary from './CustomErrorBoundary'
import ExampleComponent from './ExampleComponent'
export default function App() {
  return (
    <div>
        <CustomErrorBoundary>
          <ExampleComponent/>
        </CustomErrorBoundary>
    </div>
  )
}

ExampleComponent.js :

import React from 'react';
const ExampleComponent = () => {
  const throwError = () => {
    throw new Error('This is a deliberate error for demonstration purposes');
  };
  return (
    <div>
      <h1>Example Component</h1>
      <button onClick={throwError}>Click me to throw an error</button>
    </div>
  );
};
export default ExampleComponent;


CustomErrorBoundary.js :

import React, { useState, useEffect } from 'react';
const CustomErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  useEffect(() => {
    const handleError = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
    };
    if (hasError) {
      setHasError(false);
      setError(null);
      setErrorInfo(null);
    }
    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, [hasError]);
  if (hasError) {
    return (
      <div>
        <h2>Something went wrong!</h2>
        <p>{error.toString()}</p>
        <div>{errorInfo.componentStack}</div>
      </div>
    );
  }
  return <>{children}</>;
};
export default CustomErrorBoundary;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q19 : Implementation Of useState :

App.js :

import React from 'react'
import Counting from './Counting'
export default function App() {
  return (
    <div>
        <Counting/>
    </div>
  )
}

Counting.js :

import React, { useState } from 'react';
const Counting = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
    setCount(count + 1);
    };
    const decrement = () => {
    setCount(count - 1);
    };
    const reset = () => {
    setCount(0);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
export default Counting;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q20 : Dynamic Theming :

App.js :

import React from 'react'
import ThemeToggle, { ThemeApp } from "./theme";
export default function App() {
  return (
    <div>
        <ThemeApp>
          <ThemeToggle />
        </ThemeApp>
    </div>
  )
}

theme.js :

import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';
const ThemeContext = createContext();
const lightTheme = createMuiTheme({
    palette: {
        mode: 'light',
    },
});
const darkTheme = createMuiTheme({
    palette: {
        mode: 'dark',
    },
});
export const ThemeApp = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);
    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ textAlign: 'center', position: 'absolute', top: '40%', left: '42%' }}>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
                {theme === lightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            </Button>
        </div>
    );
};
export default ThemeToggle;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q21 : Dynamic Book Search :

App.js :

import React from 'react'
import { SearchProvider } from './SearchContext';
import BookList from './BookList';
export default function App() {
  return (
    <div>
        <SearchProvider>
          <BookList/>
        </SearchProvider>
    </div>
  )
}

BookList.js :

import React, { useEffect, useState } from 'react';
import { useSearch } from './SearchContext';
const BookList = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search Books"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default BookList;

SearchContext.js :

import React, { createContext, useContext, useState } from 'react';
const SearchContext = createContext();
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
export const useSearch = () => {
  return useContext(SearchContext);
};

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q21 : Optimize Component Rendering :

App.js :

import React from 'react'
import Expense from './Expense'
export default function App() {
  return (
    <div>
        <Expense/>
    </div>
  )
}

Expense.js :

import React, { useState, useMemo } from "react";
const Expense = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        &nbsp;
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default Expense;