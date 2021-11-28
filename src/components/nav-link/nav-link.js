

import React, { useEffect, useState } from 'react';

import useWindowSize from '../../helpers/useWindowSize';

import './nav-link.scss';
import { Link, useLocation} from 'react-router-dom';

import cx from 'classnames';



export default function NavLink({ to, ...props }) {

    const location = useLocation();

    useEffect(() => {
        // console.log('location', location);
    },[location]);

    const classes = cx( 
        'nav-link', 
        props.className,
        { 'selected': location.pathname === to }
    );

    return (
        <>
            <div className={classes}>
                <Link to={to}> {props.children} </Link>
            </div>
        </>
    )

}