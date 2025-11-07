

import React from 'react';

import './nav-link.scss';
import { Link, useLocation } from 'react-router-dom';

import cx from 'classnames';

export default function NavLink({ to, children, className, onClick, role, ...rest }) {
    const location = useLocation();

    const classes = cx(
        'nav-link',
        className,
        { 'selected': location.pathname === to }
    );

    return (
        <div className={classes} role={role}>
            <Link to={to} onClick={onClick} {...rest}>
                {children}
            </Link>
        </div>
    );
}