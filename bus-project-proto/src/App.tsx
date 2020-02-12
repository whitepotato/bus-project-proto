import React from 'react';
import logo from './logo.svg';
import Checkout from './view/checkout/Checkout'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Checkout />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
