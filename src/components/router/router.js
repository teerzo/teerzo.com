
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


export default function App() {

    // const location = useLocation();

    // useEffect(() => {
    //     console.log('location change', location);

    // },[location])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}