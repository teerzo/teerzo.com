

import React, { useEffect, useState } from 'react';

import useWindowSize from '../../helpers/useWindowSize';

// import './nav.scss';



export default function OutLink({ href, ...props }) {

    return (
        <>
            <div className="out-link">
                <a href={href} target="_blank"> {props.children} </a>
            </div>
        </>
    )

}