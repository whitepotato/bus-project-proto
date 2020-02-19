import React from "react";
import logo from "./logo.svg";
import Checkout from "./view/checkout/Checkout";
import "./App.css";

const isAuthenticated: boolean = true;

const App = () => {
  if (isAuthenticated) {
    return <Checkout />;
  } else {
    return <React.Fragment />;
  }
};

export default App;
