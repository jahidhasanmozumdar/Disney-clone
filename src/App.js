import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
