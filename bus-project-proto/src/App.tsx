import React from "react";
import logo from "./logo.svg";
import Checkout from "./view/checkout/Checkout";
import "./App.css";
import Order from "./view/order/Order";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from "./view/LoginPage";


const isAuthenticated: boolean = true;

const App = () => {
  /*
  if (isAuthenticated) {
    return <Order />;
  } else {
    return <React.Fragment />;
  }*/
  return(
  <Router>
  <div>
    <Route exact path="/" component={LoginPage} />
    <Route path="/order" component={Order} />
    <Route path="/check" component={Checkout} />
  </div>
</Router>);
};

export default App;
