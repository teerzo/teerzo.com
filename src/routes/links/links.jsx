// import Nav from '../../components/nav';
import Page from '../../components/page';
// import { useEffect } from 'react';
import { FaGithub, FaTwitter } from "react-icons/fa";
import OutLink from '../../components/out-link';
// import './about.scss';

import Footer from '@components/footer';

export default function Links({ ...props }) {

    return (
        <>
            <div className="container">
                <Page className="">
                    <div className="links page-padding ">
                        <div className="bg-black">
                            <h3> Links here </h3>
                        </div>
                        <div className="bg-black">

                       
                        </div>
                        <div className="divider"> </div>
                    </div>
                </Page>
                <Footer />
            </div>
        </>
    );
}