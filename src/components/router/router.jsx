
// Packages
import { Routes, Route } from "react-router-dom";

// Routes
import Home from '@routes/home';
import Projects from '@routes/projects';
import About from '@routes/about';
import Nav from '@components/nav';

export default function Router({ ...props }) {
    return (
        <>  
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}