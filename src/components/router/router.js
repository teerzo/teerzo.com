
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../routes/home';
import Projects from '../../routes/projects';
import About from '../../routes/about';

export default function App() {
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