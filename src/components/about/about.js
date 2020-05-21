
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import imgProfile from '../../images/profile.png';
import imgProfileSmall from '../../images/profile-small.png';

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

            <img className="profile" src={imgProfile} />
            <img className="profile" src={imgProfileSmall} />
            <p> About </p>

        </div>
    );
}
