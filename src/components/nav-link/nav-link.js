

import React, { useEffect, useState } from 'react';

import useWindowSize from '../../helpers/useWindowSize';

// import './nav.scss';
import { Link } from 'react-router-dom';



export default function NavLink({ to, ...props }) {

    return (
        <>
            <div className="nav-link">
                <Link to={to}> {props.children} </Link>
            </div>
        </>
    )

}