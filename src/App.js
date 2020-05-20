import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";

import Wrapper from './components/wrapper';

import Projects from './components/projects';
import Header from './components/header';

// import Router from './components/router';

function App() {
  
  return (  
    <div className="App">
      <Router>
        <Wrapper>
          <h3> WRAPPER </h3>
          <Header />


          <Switch>
            <Route path="/about">
              <h3>About </h3>
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <h3>Home  </h3>
            </Route>

          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
