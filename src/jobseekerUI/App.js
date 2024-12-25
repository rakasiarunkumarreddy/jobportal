// src/App.js
import React from 'react';
import Header from './header/Header';
import Body from './body/body';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

export default App;
