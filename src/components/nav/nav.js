

import React, { useEffect, useState } from 'react';

import useWindowSize from '../../helpers/useWindowSize';

import './nav.scss';

export default function Nav(props) {
    const size = useWindowSize();
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if (size.width <= 1000) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }, [size])


    return (
        <>
            {mobile ?
                <div className='nav'>
                    <div className="nav-links">
                        <div className="title"> TEERZO </div>
                    </div>
                </div>

                :
                <div className='nav'>
                    <div className="nav-links">
                        <NavLink> PROJECTS </NavLink>
                        <div className="title"> TEERZO </div>
                        <NavLink> ABOUT </NavLink>
                    </div>
                </div>
            }

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