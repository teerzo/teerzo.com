
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../routes/home';
import Projects from '../../routes/projects';
import About from '../../routes/about';

import { useLocation } from "react-router";
import { useEffect } from "react";


export default function Router({ onChange, ...props }) {

    // const location = useLocation();

    // useEffect(() => {
    //     console.log('location change', location);

    // }, [location])

    function onRouterChange() {
        console.log('onRouterChange');
    }

    return (
        <>
            <BrowserRouter onChange={onRouterChange}>
                <Routes>
                    <Route path="/" element={<Home onChange={onChange} />} />
                    <Route path="/projects" element={<Projects onChange={onChange}/>} />
                    <Route path="/about" element={<About onChange={onChange}/>} />

                </Routes>
            </BrowserRouter>
        </>
    );
}