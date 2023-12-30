//import "./App.css";
//import ToggleMessage from "./Day3/ToggleMessage";
// import Navbar from "./Components/Navbar";
// import Main from "./Components/Main";
// import Footer from "./Components/Footer";
//import Buttons from "./Components/Buttons";
//import GokuTransformation from "./Day3/GokuTransformation";
//import DynamicRendering from "./Day3/DynamicRendering";
//import HelloWorld from "./Day2/HelloWorld";
// import Counter from "./Day3/Counter";

// function App() {
// return (
// <div>
// <Counter></Counter>
// </div>
//   *********buttons code******
//     <div className="flex space-x-4 my-4">
//       <Buttons color="green">Green</Buttons>
//       <Buttons color="red">Red</Buttons>
//       <Buttons color="blue">Blue</Buttons>
//       <Buttons color="yellow">Yellow</Buttons>
//     </div>
// );
// }

// export default App;

// import { useState } from "react";
// import Cart from "./Day3/CoffeeShop/Cart";
// import Menu from "./Day3/CoffeeShop/Menu";
// import Navbar from "./Day3/CoffeeShop/Navbar";
// import categories from "./Day3/CoffeeShop/Products";

// function App() {
//   const [activeCategory, setActiveCategory] = useState(categories[0]);
//   const [products, setProducts] = useState([]);

//   const handleClick = (index) => {
//     setActiveCategory(categories[index]);
//   };

//   const handleAddToCart = (item) => {
//     setProducts([...products, item]);
//   };

//   return (
//     <div className="space-y-4 my-4">
//       <Navbar category={categories} handleClick={handleClick} />
//       <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
//       <Cart products={products} />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Fruits from "./Day4/Fruits.jsx";
// function App() {
//   return (
//     <div>
//       <h1>Enter Your Name Favourite Fruit</h1>
//       <Fruits />
//     </div>
//   );
//  }

// export default App;

// import React from "react";
// import LoginPage from "./Project/LoginPage.jsx";
// // import { createTheme, ThemeProvider } from "@mui/material";
// // import NavBar from "./Project/Home/NavBar.jsx";

// // const theme = createTheme();
// const App = () => {
//   return (
//     // <ThemeProvider theme={theme}>
//     <div>
//       {/* <NavBar></NavBar> */}
//       <center>
//         <LoginPage></LoginPage>
//       </center>
//     </div>
//     // {/* </ThemeProvider> */}
//   );
// // };

// export default App;

// import React from "react";
// import Signup from "./Project/Signup.jsx";
// const App = () => {
//   return (
//     <div
//       style={{
//         backgroundImage:
//           'url("https://img.freepik.com/premium-photo/nature-green-leaf-garden-summer-natural-green-leaves-plants-using-as-spring-background-cover-page-greenery-environment-ecology-wallpaper_103077-225.jpg?w=2000")',
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Signup></Signup>
//     </div>
//   );
// };

// export default App;

// import * as React from "react";
// import Album from "./Project/Home/Album";

// function App() {
//   return (
//     <div>
//       <Album />
//     </div>
//   );
// }

// export default App;

import React from "react";
import ToggleImg from "./DecemberTestSeries/ToggleImg.jsx";

function App() {
  return (
    <div>
      <ToggleImg></ToggleImg>
    </div>
  );
}

export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import "./App.css";
// import { increment, decrement } from "./ModelLab/action";
// import Counter from "./ModelLab/Counter.jsx";
// import store from "./ModelLab/store";

// function App() {
//   const handleIncrement = () => {
//     // You can dispatch the increment action here
//     store.dispatch(increment());
//   };

//   const handleDecrement = () => {
//     // You can dispatch the decrement action here
//     store.dispatch(decrement());
//   };

//   return (
//     <Provider store={store}>
//       <Counter />
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </Provider>
//   );
// }

// export default App;

// import React from "react";
// import ResponsiveAppBar from "./ModelLab/ResponsiveAppBar";
// function App() {
//   return <ResponsiveAppBar />;
// }
// export default App;

/*
copy this code in index.js file 
if it doesn't work as a separate jsx component file*/

/*Place the code in 
index.js if it doesn't work*/
