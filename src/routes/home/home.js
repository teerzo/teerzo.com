// Packages
import { useEffect } from 'react';

// Components
import Nav from '../../components/nav';
import Page from '../../components/page';
import Footer from 'components/footer';

// Styles 
import './home.scss';

export default function Home({ ...props }) {

    return (
        <>
            <div className="container">
                <Page className="no-pointer">
                    {/* <div className="home page-padding page-layout-centered">

                    </div> */}
                </Page>
                <Footer />
            </div>
        </>
    );
}