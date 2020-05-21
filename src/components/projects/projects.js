
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Image from '../image';

import imgProfile from '../../images/profile.png';
import imgProfileSmall from '../../images/profile-small.png';

import './projects.scss';

export default function Projects(props) {

    const [items, setItems] = useState([
        { 
            name: 'Test',
            link: '',   
        },
        { 
            name: 'Test',
            link: '',   
        },
        { 
            name: 'Test',
            link: '',   
        },
        { 
            name: 'Test',
            link: '',   
        },
        { 
            name: 'Test',
            link: '',   
        },
    ]);

    const cmpClasses = cx(
        'projects',
    )

    return (
        <div className={cmpClasses}>
            {items && items.length > 0 ?
                <div className="grid">
                    {items.map((item, key) => {
                        const itemClasses = cx(
                            'item',

                        )
                        return (
                            <div key={key} className={itemClasses}> 
                                <div className="thumb"> 
                                    <Image src={imgProfile} preview={imgProfileSmall}/>
                                </div>
                                Item 
                            
                            </div>
                        )
                    })
                }
                </div>
                :
                <div className="blank">
                    No projects available
             </div>
            }
        </div>
    );
}
