import Nav from '../../components/nav';
import Page from '../../components/page';
import { useEffect } from 'react';

export default function Projects({onChange, ...props}) {

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
                <Page>
                    <div className="page-padding page-layout-centered">
                        {/* <h1> Projects </h1> */}
                    </div>
                </Page>
            </div>
        </>
    );
}