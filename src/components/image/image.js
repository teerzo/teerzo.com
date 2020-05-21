import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './image.scss';

export default function CmpImage(props) {
    const [loaded, setLoaded] = useState(false);
    const [src, setSrc] = useState(null);

    useEffect(() => {
        if (props.preview) {
            setSrc(props.preview);
            console.log('image props', props);
            const image = new Image();
            image.src = props.src;

            image.onload = () => {
                setTimeout(() => {
                    setLoaded(true);
                    setSrc(props.src);
                }, 500);
            }
        }
        else {
            setSrc(props.src);
            setLoaded(true);
        }
    }, [])

    const cmpClasses = cx(
        'image',
        { 'loading': !loaded }
    )

    return (
        <div className={cmpClasses}>
            <img src={src} />
            {loaded ?
                <> </>
                :
                <div className="loader"> </div>
            }
        </div>
    );
}