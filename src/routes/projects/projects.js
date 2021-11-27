import Nav from '../../components/nav';
import Page from '../../components/page';
import { useEffect, useState } from 'react';
import OutLink from 'components/out-link';


// Components 
import Image from 'components/image';
// Images
import jungleImg from 'images/jungle.png';

import './projects.scss'

export default function Projects({ ...props }) {

    const [projects, setProjects] = useState([
        { title: 'Jungle im my plants', href: 'https://jungleinmyplants.com', src: jungleImg },
        // { title: 'Jungle im my plants', href: 'https://jungleinmyplants.com', src: jungleImg },
        // { title: 'Jungle im my plants', href: 'https://jungleinmyplants.com', src: jungleImg },
        // { title: 'Jungle im my plants', href: 'https://jungleinmyplants.com', src: jungleImg },
        // { title: 'Jungle im my plants', href: 'https://jungleinmyplants.com', src: jungleImg },
        // { title: 'Jungle im my plants', href: 'https://jungleinmyplants.com', src: jungleImg },
    ])

    return (
        <>
            <div className="container">
                <Page className="">
                    <div className="projects page-padding">
                        { projects.map((item, key) => {
                            return (
                                <ProjectCard key={key} {...item} />
                            )
                        })}
                    </div>
                </Page>
            </div>
        </>
    );
}

function ProjectCard({title, href, src, ...props}) {

    return (
        <>
            <div className="project-card bg-black">
                <h3> {title} </h3>
                <OutLink href={href}> <Image width={300} src={src} /> </OutLink>
            </div>
        </>
    )
}