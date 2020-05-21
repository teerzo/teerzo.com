
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
                <Image src={imgProfile} preview={imgProfileSmall} />
            </div>
            <div className="flex">
                <a rel="noopener" target="_blank" href={'https://github.com/teerzo'}> Github </a>
                <div className="divider"> </div>
                <a rel="noopener" target="_blank" href={'https://www.linkedin.com/in/kyle-mcarthur-5064ba42/'}> Linkedin</a>
                <div className="divider"> </div>
                <a rel="noopener" target="_blank" href={`${process.env.PUBLIC_URL}/kylemcarthur-resume.pdf`}> Resume</a>
                <div className="divider"> </div>
                <a rel="noopener" target="_blank" href={'mailto:teerzodev@gmail.com'}> Email</a>
            </div>

            <h3> About Kyle </h3>
            <p>
                Kyle McArthur is a self taught frontend with over 3 years of experience working with AngularJS, React and JQuery. <br />
                Formerly a junior front end developer at Interact Technology, a digital agency focused creating mobile responsive web apps for pharmaceutical clients such as Pfizer, Vertex and Allergan. <br />
                Currently freelancing kyle is researching and developing exciting projects with React, D3.js and AWS services ( Lambda, EC2, S3, Serverless )
            </p>

        </div>
    );
}
