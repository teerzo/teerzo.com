
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Projects from '../../components/projects';

export default function RouteProjects(props) {

    const routeClasses = cx(
        'route',
    )

    return (
        <div className={routeClasses}>
            <Projects />
        </div>
    );
}
