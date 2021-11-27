import Nav from '../../components/nav';
import Page from '../../components/page';
import { useEffect } from 'react';
import { FaGithub, FaTwitter } from "react-icons/fa";
import OutLink from '../../components/out-link';
import './about.scss';

export default function About({ ...props }) {

    return (
        <>
            <div className="container">
                <Page className="">
                    <div className="about page-padding ">
                        <div className="bg-black">
                            <h3> A bunch of shit about Kyle here lmao  </h3>
                        </div>
                        <div className="bg-black">

                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus, metus blandit iaculis tincidunt, massa nisi iaculis metus, eget maximus ex ligula a est. Suspendisse congue neque eget metus iaculis elementum. Donec sed felis quam. Pellentesque feugiat tellus libero, sed semper massa tempus eget. Donec pellentesque gravida libero, vel semper urna sodales interdum. Cras tempus placerat nulla, non malesuada nibh feugiat vel. Praesent viverra mi sed laoreet placerat. Nullam sit amet lorem ut neque iaculis venenatis nec ut sem. Maecenas tincidunt pharetra arcu sollicitudin rhoncus. Donec facilisis massa id nunc lacinia blandit. Donec bibendum est id justo vulputate, sit amet pretium nisi elementum. Nam cursus convallis malesuada. Ut sagittis diam risus, et congue magna convallis cursus. </p>
                        </div>
                        <div className="flex-horizontal flex-justify-center bg-black">
                            <OutLink href={"https://github.com/teerzo"}>
                                <FaGithub className="icon" />
                            </OutLink>
                            <OutLink href={"https://twitter.com/teerzo"}>
                                <FaTwitter className="icon" />
                            </OutLink>
                        </div>
                        <div className="divider"> </div>
                    </div>
                </Page>
            </div>
        </>
    );
}