
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import About from '../../components/about';

export default function RouteAbout(props) {

    const routeClasses = cx(
        'route',
    )

    return (
        <div className={routeClasses}>
            <About />
        </div>
    );
}
