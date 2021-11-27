// Packages
import React, { useEffect, useState, useContext } from 'react';
import cx from 'classnames';

// Styles
import './image.scss';

export default function Image({ src, styles, ...props }) {

    const classes = cx(
        'image',
        props.className,
    );

    const cmpStyles = {
        width: props.width ? props.width : '100%',
        height: props.height ? props.height : 'auto',
        ...styles
    }

    return (
        <div className={classes} style={cmpStyles}>
            <img src={src} />
        </div>
    )
}