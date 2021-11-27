// Packages
import { useEffect } from 'react';

// Components
import Nav from '../../components/nav';
import Page from '../../components/page';

// Styles 
import './home.scss';

export default function Home({ ...props }) {

    return (
        <>
            <div className="container">
                <Page className="">
                    <div className="home page-padding page-layout-centered">

                    </div>
                </Page>
            </div>
        </>
    );
}