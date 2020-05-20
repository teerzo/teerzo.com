import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import './link.scss';

export default function CmpLink(props) {
    console.log('link', props.match, props.path);


    const cmpClasses = cx(
        'link',
        {'active': props.location && props.path === props.location.pathname ? true : false }
    )

    return (
        <Link to={props.path} className={cmpClasses}>
            {props.children}
        </Link>
    );
}