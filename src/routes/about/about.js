
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

// import About from '../../components/projects';

export default function RouteAbout(props) {

    const routeClasses = cx(
        'route',
    )

    return (
        <div className={routeClasses}>
            <h3> About </h3>
            {/* <Projects /> */}
        </div>
    );
}
