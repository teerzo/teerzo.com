import Nav from '../../components/nav';
import Page from '../../components/page';
import { useEffect } from 'react';

import './about.scss';

export default function About({ onChange, ...props }) {

    useEffect(() => {
        if (onChange) {
            // console.log('onChange', 'projects');
            onChange('about');
        }
    }, [])

    return (
        <>
            <Nav />
            <div className="container">
                <Page className="">
                    <div className="about page-padding page-layout-centered">

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
                        <br/>
                        <br/>
                        <div className="flex-vertical">
                            <div className="flex-horizontal bg-black">
                                <h3> A bunch of shit about Kyle here lmao  </h3>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        </>
    );
}