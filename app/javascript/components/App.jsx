import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './template-parts/Header';
import Footer from './template-parts/Footer';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Interests from './pages/Interests';
import Highlights from './pages/Highlights';
import Specialties from './pages/Specialties';
import BlogHome from './pages/BlogHome';
import Contact from './pages/Contact';
import BlogReader from './template-parts/blog/BlogReader';
import ScrollToTop from './ScrollToTop';
import LoadingScreen from './LoadingScreen';

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <LoadingScreen />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/specialties" element={<Specialties />} />
                <Route path="/highlights" element={<Highlights />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/blog/:slug" element={<BlogReader />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}
