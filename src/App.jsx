import React from 'react';
import './App.css';
import logo from './logo.svg';

import AppHeader from './app-header/conatiners/AppHeader';

function App() {
  return (
    <AppHeader title="Peaks.js Player" logo={logo}></AppHeader>
  );
}

export default App;
