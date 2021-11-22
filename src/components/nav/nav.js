

import React, { useEffect, useState } from 'react';

import useWindowSize from '../../helpers/useWindowSize';

import './nav.scss';
import { Link, useLocation } from 'react-router-dom';

import NavLink from '../nav-link';

import { FaStream, FaBars, FaTimes } from 'react-icons/fa';


export default function Nav(props) {
    const size = useWindowSize();
    const [mobile, setMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        if (size.width <= 1000) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }, [size])

  


    function handleChange(isMenuOpen) {
        setMenuOpen(isMenuOpen);
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

                            <Hamburger onChange={handleChange} />
                        </div>
                        {menuOpen ?
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

function Hamburger({ onChange, ...props }) {
    const [mouseOver, setMouseOver] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange(menuOpen);
        }
    }, [menuOpen])

    function handleClick() {
        setMenuOpen(!menuOpen);

    }

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseLeave() {
        setMouseOver(false);
    }


    return (
        <div className="hamburger" onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {menuOpen ?
                <FaTimes className="icon" />
                :
                <FaBars className="icon" />
            }

        </div>
    )
}