
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Projects from '../../components/projects';

export default function RouteProjects(props) {

    const cmpClasses = cx(
        'link',
    )

    return (
        <div>
            <h3> Projects </h3>
            <Projects />
        </div>
    );
}
