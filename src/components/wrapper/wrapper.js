import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './wrapper.scss';

export default function Wrapper(props) {

    const cmpClasses = cx(
        'wrapper',
    )

    return (
        <div className={cmpClasses}> 
            {props.children}
        </div>
    );
}