

import React, { useEffect, useState } from 'react';

import './nav.scss';

export default function Nav(props) {

    return (
        <>
            <div className='nav'>
                <div className="nav-links">
                    <NavLink> PROJECTS </NavLink>
                    <div className="title"> TEERZO </div>
                    <NavLink> ABOUT </NavLink>
                </div>
            </div>
        </>
    )
}

function NavLink(props) {

    return (
        <>
            <div className="nav-link">
                <a href=""> {props.children} </a>
            </div>
        </>
    )

}