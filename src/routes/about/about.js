import Nav from '../../components/nav';
import Page from '../../components/page';
import { useEffect } from 'react';

export default function About({onChange, ...props}) {

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
                <Page>
                    <div className="page-padding page-layout-centered">
                        {/* <h1> About </h1> */}
                    </div>
                </Page>
            </div>
        </>
    );
}