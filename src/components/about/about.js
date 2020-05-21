
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import imgProfile from '../../images/profile.png';
import imgProfileSmall from '../../images/profile-small.png';

import Image from '../image';

import './about.scss';

export default function About(props) {

    const [loaded, setLoaded] = useState(true);

    useEffect(() => {

    }, []);

    const cmpClasses = cx(
        'about',
    )

    return (
        <div className={cmpClasses}>
            {/* {loaded ?
                <img className="profile" src={imgProfile} />
                :
                <img className="profile" src={imgProfileSmall} />
            } */}
            <div className="profile-parent">
                <Image src={imgProfile} preview={imgProfileSmall}/>

            </div>


            {/* <img className="profile" src={imgProfile} />
            <img className="profile" src={imgProfileSmall} /> */}
            <p> About </p>

        </div>
    );
}
