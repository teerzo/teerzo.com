import React, { useEffect, useState } from 'react';
import './page.scss';
import cx from 'classnames';

export default function Page({className, ...props}) {


    const classes = cx(
        'page', 
        className
    )
    return (
        <>
            <div className={classes}>
                {props.children}
            </div>
        </>
    )
}