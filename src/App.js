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
import Header from './components/header';

import RouteHome from './routes/home';
import RouteProjects from './routes/projects';
import RouteAbout from './routes/about';


// import Router from './components/router';

function App() {

  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Header />
          <Switch>
            <Route path="/about">
              <RouteAbout />
            </Route>
            <Route path="/projects">
              <RouteProjects />
            </Route>
            <Route path="/">
              <RouteHome />
            </Route>

          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
