import "./App.css";
//import ToggleMessage from "./Day3/ToggleMessage";
// import Navbar from "./Components/Navbar";
// import Main from "./Components/Main";
// import Footer from "./Components/Footer";
import Buttons from "./Components/Buttons";
//import Button from "./Components/Button";

function App() {
  return (
    <div className="flex space-x-4 my-4">
      <Buttons color="green">Green</Buttons>
      <Buttons color="red">Red</Buttons>
      <Buttons color="blue">Blue</Buttons>
      <Buttons color="yellow">Yellow</Buttons>
    </div>
  );
}
export default App;
