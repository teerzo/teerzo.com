// Packages
import React, { useRef, useState, useEffect } from 'react'

// Components 
// import Nav from '@components/nav';
import Page from '@components/page';
import CmpImage from '@components/image';
import Footer from '@components/footer';
import OutLink from '@components/out-link';

// Images
// import jungleImg from 'images/jungle.png';

import './projects.scss'

import projectsData from '../../data/projects.json';

export default function Projects({ ...props }) {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        // console.log('projects', projectsData);
        setProjects(projectsData);
    }, [projectsData]);

    return (
        <>
            <div className="container">
                <Page className="">
                    <div className="projects page-padding">
                        {projects.map((item, key) => {
                            return (
                                <ProjectCard key={key} {...item} />
                            )
                        })}
                        <div className="divider"></div>
                    </div>
                </Page>
                <Footer />
            </div>
        </>
    );
}

function ProjectCard({ title, url, img, imgLow, ...props }) {
    const [srcLow, setSrcLow] = useState(null);
    const [src, setSrc] = useState(null);
    const width = 300;
    const ratio = 9 / 16;

    const [size, setSize] = useState({ w: width, h: width * ratio });

    useEffect(() => {
        //preloading image
        // const low = `${process.env.PUBLIC_URL}/images/${imgLow}`;
        // setSrcLow(low);
    }, []);

    useEffect(() => {
        // const high = `${process.env.PUBLIC_URL}/images/${img}`;
        // setSrc(high);
    }, [srcLow]);

    return (
        <>
            <div className="project-card bg-black">
                <h3> {title} </h3>
                <OutLink href={url}> <CmpImage width={size.w} height={size.h} src={src ? src : srcLow} /> </OutLink>
            </div>
        </>
    )
}