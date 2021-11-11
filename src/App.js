import './App.scss';

// import { BrowserRouter } from "react-router-dom";
// import Nav from './components/nav';
import Background from './components/background';
// import Page from './components/page';

import Router from './components/router';

export default function App() {
  return (
    <>
      <div className="App">
        <Background />
        <Router />
      </div>
    </>
  );
}