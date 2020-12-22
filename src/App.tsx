import React from 'react';

import logo from './logo.svg';
import './App.css';
import HelloTwo from './HelloTwo';
import HelloThree from './HelloThree';

const HelloWorld = () => <p>Hello World Four</p>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {React.createElement('p', null, 'Hello World One')}
        <HelloTwo />
        <HelloThree />
        <HelloWorld />
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
};

export default App;
