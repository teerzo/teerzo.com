import './App.scss';

// import { BrowserRouter } from "react-router-dom";
// import Nav from './components/nav';
import Background from './components/background';
// import Page from './components/page';
import React, { useRef, useState, useEffect } from 'react'


import Router from './components/router';

export default function App() {

  const [route, setRoute] = useState('');

  useEffect(() => {
    console.log('route change', route );
  },[route])


  return (
    <>
      <div className="App">
        <Background route={route}>
          <Router onChange={setRoute}/>
        </Background>
      </div>
    </>
  );
}