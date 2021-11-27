import './App.scss';

// import { BrowserRouter } from "react-router-dom";
// import Nav from './components/nav';
import Background from './components/background';
// import Page from './components/page';
import React, { useRef, useState, useEffect } from 'react'


import Router from './components/router';

export default function App() {

  return (
    <>
      <div className="App">
        <Background >
          <Router />
        </Background>
      </div>
    </>
  );
}