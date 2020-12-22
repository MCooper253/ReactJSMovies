import React from 'react';

import logo from './logo.svg';
import './App.css';
import HelloTwo from './HelloTwo';
import HelloThree from './HelloThree';
import HelloFour from './HelloFour';

//const HelloWorld = () => <p>Hello World Four</p>;

function App():JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {React.createElement('p', null, 'Hello World One')}
        <HelloTwo />
        <HelloThree />
        <HelloFour />
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
