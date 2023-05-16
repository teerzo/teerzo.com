
import React, { useRef, useState, useEffect, Suspense } from 'react'

import Router from './components/router';
import Background from './components/background';

import './App.scss';

export default function App() {

  const [speed, set] = useState(1);

  return (
    <>
      <div className="App">
        <Background speed={speed} />
        <Router />
      </div>
    </>
  );
}