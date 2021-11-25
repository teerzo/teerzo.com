import Nav from '../../components/nav';
import Page from '../../components/page';
import { useEffect } from 'react';
import OutLink from 'components/out-link';


// Components 
import Image from 'components/image';
// Images
import jungleImg from 'images/jungle.png';

export default function Projects({ onChange, ...props }) {

    useEffect(() => {
        if (onChange) {
            // console.log('onChange', 'projects');
            onChange('projects');
        }
    }, [])

    return (
        <>
            <Nav />

            <div className="container">
                <Page className="">
                    <div className="projects page-padding page-layout-centered">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                 
                        <div className="flex-horizontal">
                            <div className="flex-vertical bg-black">
                                <h3> Jungle im my plants </h3>
                                <OutLink href="https://jungleinmyplants.com"> <Image width={300} src={jungleImg} /> </OutLink>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        </>
    );
}