
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import imgProfile from '../../images/profile.png';

import './about.scss';

export default function About(props) {

    const cmpClasses = cx(
        'about',
    )

    return (
        <div className={cmpClasses}>

            <img className="profile" src={imgProfile}/> 
            <p> About </p>
        
        </div>
    );
}
