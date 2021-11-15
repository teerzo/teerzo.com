import Nav from '../../components/nav';
import Page from '../../components/page';

export default function About() {
    return (
        <>
            <Nav />
            <div className="container">
                <Page>
                    <div className="page-padding page-layout-centered">
                        <h1> About </h1>
                    </div>
                </Page>
            </div>
        </>
    );
}