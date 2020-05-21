
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

// import About from '../../components/projects';

export default function RouteHome(props) {

    const routeClasses = cx(
        'route',
    )

    return (
        <div className={routeClasses}>
            <h3> Home </h3>
            {/* <Projects /> */}
        </div>
    );
}
