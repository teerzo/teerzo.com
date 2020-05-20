import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Route from '../route';

import Header from '../header';
import Wrapper from '../wrapper';


// import RouteHome from '../../routes/home';
import RouteProjects from '../../routes/projects';
// import RouteAbout from '../../routes/about';


export default function CmpRouter() {
    let match = useRouteMatch();

    return (
        <Router>
            <Wrapper>

                <h3> Router </h3>
                <p> {match.url} </p>
                {/* <RouteProjects /> */}

                <Switch>

                    <Header />
                    <h3> Projects </h3>


                    <Route path="/projects">
                        <RouteProjects />
                    </Route>
                    {/* <Route path="/about">
                    <RouteAbout />
                </Route>
                <Route path="/">
                    <RouteHome />
                </Route> */}
                </Switch>

            </Wrapper>
        </Router>
    )
}