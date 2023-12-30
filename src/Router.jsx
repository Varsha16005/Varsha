import { createBrowserRouter } from "react-router-dom";
import NavBar from "./Project/Home/NavBar";
import LoginPage from "./Project/LoginPage";
import Signup from "./Project/Signup";

const router = createBrowserRouter([
  { path: "/home", element: <NavBar /> },
  { path: "/", element: <LoginPage /> },
  { path: "/signup", element: <Signup /> },
]);

export default router;
