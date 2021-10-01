import React from 'react';
import ButtonComponent from '../../Components/Button/Button';
import "./test1.scss"

function Test() {
  return (
    <div className="example">
      <header className="App-header">
        <p className="font">
          test link
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent></ButtonComponent>
      </header>
    </div>
  );
}

export default Test;
