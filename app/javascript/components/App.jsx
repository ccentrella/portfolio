import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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
import Unsubscribe from './template-parts/Unsubscribe';
import AppLoading from './AppLoading';

export default function App() {
    // Load reCaptcha script functions
    useEffect(() => {
        const recaptchaScript = document.createElement('script');
        recaptchaScript.src =
            'https://www.google.com/recaptcha/api.js?render=' + RECAPTCHA_SITE_KEY_V3;
        recaptchaScript.async = true;
        document.body.appendChild(recaptchaScript);

        return () => {
            document.body.removeChild(recaptchaScript);
        };
    }, []);

    // Close mobile drop-down menu whenever a new page is loaded
    let location = useLocation();
    useEffect(() => {
        const toggleEl = document.getElementById('toggle');
        if (toggleEl) {
            toggleEl.checked = false;
        }
    }, [location]);

    return (
        <>
            <ScrollToTop />
            <Header />
            <AppLoading />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/specialties" element={<Specialties />} />
                <Route path="/highlights" element={<Highlights />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/blog/:slug" element={<BlogReader />} />
                <Route path="/subscribers/:id/edit" element={<Unsubscribe />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}
