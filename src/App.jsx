import React from 'react';
import './App.css';
import logo from './logo.svg';

import AppHeader from './app-header/conatiners/AppHeader';
import TrackList from './track/containers/TrackList';

function App() {
  return (
    <div>
      <AppHeader title="Peaks.js Player" logo={logo}></AppHeader>
      <TrackList></TrackList>
    </div>
  );
}

export default App;
