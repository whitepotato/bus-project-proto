import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkout from './view/checkout/Checkout'
import * as serviceWorker from './serviceWorker';
import Order from './view/order/Order';
import LoginPage from './view/LoginPage';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
