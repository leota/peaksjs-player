import React from 'react';
import './App.css';
import logo from './logo.svg';

import * as sample from './test_data/sample.mp3';
import * as chant from './test_data/chant.mp3';
import * as guitar from './test_data/electric-guitar.mp3';
import * as anthem from './test_data/national-anthem.mp3';
import * as testfile from './test_data/testfile.mp3';

import AppHeader from './app-header/conatiners/AppHeader';
import TrackList from './track/containers/TrackList';

function App() {

  const tracks = [
    {
      id: 0,
      name: 'sample',
      file: sample
    },
    {
      id: 1,
      name: 'chant',
      file: chant
    },
    {
      id: 2,
      name: 'electric guitar',
      file: guitar
    },
    {
      id: 3,
      name: 'national anthem',
      file: anthem
    },
    {
      id: 4,
      name: 'test file',
      file: testfile
    },
  ];

  return (
    <div>
      <AppHeader title="Peaks.js Player" logo={logo}></AppHeader>
      <TrackList tracks={tracks}></TrackList>
    </div>
  );

}

export default App;
