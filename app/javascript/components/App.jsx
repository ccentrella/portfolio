import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

import Interests from "./Interests";
import Highlights from "./Highlights";
import Specialties from "./Specialties";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/interests">Interests</Link>
                        </li>
                        <li>
                            <Link to="/specialties">Specialties</Link>
                        </li>
                        <li>
                            <Link to="/highlights">Highlights</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/specialties" element={<Specialties />} />
                <Route path="/highlights" element={<Highlights />} />
            </Routes>
        </BrowserRouter>
    )
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Blog() {
    return <h2>Blog</h2>;
}
