import React, { useEffect } from 'react';
import { BaseService } from '../../services/BaseService';
import logo from '../../statics/imgs/logo.svg';
import './App.css';


const b1: BaseService = new BaseService();
function App() {
  
  // useEffect(() => {
  //   b1.getTopTrendings().then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className="App">
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
