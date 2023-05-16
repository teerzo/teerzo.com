
// Packages
import React, { useRef, useState, useEffect, Suspense } from 'react'

// Local
import Router from '@components/router/router.jsx';

// import Router from 'src/components/router/router.jsx';
// import Background from './components/background/background.jsx';

// Styles
import './App.scss';

export default function App() {

  const [speed, set] = useState(1);

  return (
    <>
      <div className="App">
        {/* <Background speed={speed} /> */}
        <Router />
      </div>
    </>
  );
}