import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to top once user navigates to new page
 * @returns 
 */
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
