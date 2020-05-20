import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    useRouteMatch,
    useParams,
    useLocation,
} from "react-router-dom";

import cx from 'classnames';

import Link from '../link';

import './header.scss';

export default function Header(props) {
    let location = useLocation();

    useEffect(() => {
        console.log('header props', props, location);
    }, [props])

    const cmpClasses = cx(
        'header',
    )

    return (
        <div className={cmpClasses}>
            <Link path="/"> <h3> teerzo </h3> </Link>


            <div className="divider"> </div>
            <Link path="/projects" location={location}> projects </Link>
            <Link path="/about" location={location}> about </Link>
            {/* <p>LOCATION: {location} </p>  */}

        </div>
    );
}