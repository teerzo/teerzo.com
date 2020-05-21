import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './image.scss';

export default function CmpImage(props) {
    const [overlay, setOverlay] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [src, setSrc] = useState(null);

    useEffect(() => {
        if (props.preview) {
            setSrc(props.preview)
        }

        console.log('image props', props);
        const image = new Image();
        image.src = props.src;
        // image.src = props.src;
        // const image = new Image();
        // image.src = props.src;

        image.onload = () => {
            setTimeout(() => {
                setLoaded(true);
                setSrc(props.src);
                setTimeout(() => {
                    setOverlay(false);
                }, 500);
            }, 1000);
        }
    }, [])

    const cmpClasses = cx(
        'image',
        { 'loading': !loaded }
    )

    const overlayClasses = cx(
        'overlay',
        { 'loading': !loaded }
    )

    return (
        <div className={cmpClasses}>
            <img src={src} />
            {overlay ?
                <div className={overlayClasses}>
                    {loaded ?
                        <> </>
                        :
                        <div className="loader"> </div>
                    }
                </div>
                : <> </>
            }
            {/* <img src={src} /> */}
        </div>
    );
}