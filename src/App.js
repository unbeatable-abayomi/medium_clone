//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <h1>Welcome TO Our App</h1>
      <Router>
       <Routes/>
      </Router>
    </div>
  );
}

export default App;
