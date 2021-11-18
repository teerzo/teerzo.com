

import Nav from '../../components/nav';
import Page from '../../components/page';
import { FaGithub, FaTwitter } from "react-icons/fa";
import OutLink from '../../components/out-link';


export default function Home() {
    return (
        <>
            <Nav />
            <div className="container">
                <Page className="">
                    <div className="home page-padding page-layout-centered">

                        <div className="flex-vertical">
                            <div className="flex-horizontal">

                                <OutLink href={"https://github.com/teerzo"}>
                                    <FaGithub className="icon" />
                                </OutLink>
                                <OutLink href={"https://twitter.com/teerzo"}>
                                    <FaTwitter className="icon" />
                                </OutLink>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        </>
    );
}