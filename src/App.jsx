import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import "jquery";
import "@popperjs/core"; // Edit here
//import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import MainContent from "./CustomersList";
//import Calculator from "./Calculator";
import ShoppingCart from "./ShoppingCart";
function App() {
  return (
    <React.Fragment>
      <br></br>
      <Navbar></Navbar>
      {/*<ShoppingCart></ShoppingCart>*/}

      <strong className="heading">Hello</strong>
      <button className="btn btn-primary">My Button</button>
      <MainContent></MainContent>
      {/*<Calculator></Calculator>*/}
    </React.Fragment>
  );
}

export default App;
