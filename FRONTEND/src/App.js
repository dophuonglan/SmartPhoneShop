import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import DieuHuongURL from './router/DieuHuongURL';

function App() {
  return (
    <Router>
    <div>
      <DieuHuongURL/>
    </div>
    </Router>
  );
}

export default App;
