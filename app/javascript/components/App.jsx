import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./template-parts/Header";
import Footer from "./template-parts/Footer";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Interests from "./pages/Interests";
import Highlights from "./pages/Highlights";
import Specialties from "./pages/Specialties";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/specialties" element={<Specialties />} />
                <Route path="/highlights" element={<Highlights />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}
