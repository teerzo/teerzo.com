
// Packages
import { Routes, Route } from "react-router-dom";

// Routes
import Home from '@routes/home';
import Projects from '@routes/projects';
import About from '@routes/about';
import Nav from '@components/nav';
import Links from '@routes/links/links.jsx';

export default function Router({ theme, onThemeChange, ...props }) {
    return (
        <>  
            <Nav theme={theme} onThemeChange={onThemeChange} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/links" element={<Links />} />
            </Routes>
        </>
    );
}