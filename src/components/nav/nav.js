

import React, { useEffect, useState } from 'react';

import useWindowSize from '../../helpers/useWindowSize';

import './nav.scss';
import { Link, useLocation } from 'react-router-dom';

import NavLink from '../nav-link';

import { FaStream, FaBars, FaTimes } from 'react-icons/fa';


export default function Nav(props) {
    const location = useLocation();
    const size = useWindowSize();
    const [mobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (size.width <= 1000) {
            setMobile(true);
        }
        else {
            setMobile(false);
            setOpen(false);
        }
    }, [size])

    useEffect(() => {
        setOpen(false);
    }, [location])


    function handleChange() {
        setOpen(!open);
    }
    

    return (
        <>
            {mobile ?
                <>
                    <div className='nav'>
                        <div className="nav-links mobile">
                            <FakeSpace />
                            <NavLink to="/" className="title"> TEERZO </NavLink>
                            {/* <TitleLink to="/" > TEERZO </TitleLink> */}
                            {/* <NavLink to='/'> TEERZO </NavLink> */}

                            <Hamburger open={open} onChange={handleChange} />
                        </div>
                        {open ?
                            <div className="nav-menu">
                                <br />
                                <NavLink to='/'> HOME </NavLink>
                                <br />
                                <NavLink to='/projects'> PROJECTS </NavLink>
                                <NavLink to="/about"> ABOUT </NavLink>

                            </div>
                            :
                            <> </>
                        }
                    </div>

                </>
                :
                <div className='nav'>
                    <div className="nav-links">
                        <NavLink to='/projects'> PROJECTS </NavLink>
                        <NavLink to="/" className="title"> TEERZO </NavLink>
                        <NavLink to="/about"> ABOUT </NavLink>
                        {/* <TitleLink to="/" > TEERZO </TitleLink> */}
                    </div>
                </div>
            }

        </>
    )
}

function TitleLink({ to, ...props }) {
    return (
        <>
            <div className="title-link">
                <Link to={to}> {props.children} </Link>
            </div>
        </>
    )
}


function FakeSpace() {
    return (
        <div className="fake-space">
            <FaBars className="icon" />
        </div>
    )
}


function Hamburger({ onChange, open, ...props }) {

    function handleClick() {
        if (onChange) {
            onChange();
        }
    }

    return (
        <div className="hamburger" onClick={handleClick}>
            {open ?
                <FaTimes className="icon" />
                :
                <FaBars className="icon" />
            }

        </div>
    )
}