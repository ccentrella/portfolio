import React from 'react';
import { useEffect } from 'react-router-dom';

function NotFound() {
    useEffect(() => {
        document.title = 'Page Not Found | Chris Centrella';
    }, []);

    return (
        <main>
            <div class="container">
                <h1>Page Not Found</h1>
                <p class="large">
                    Oops! It looks like this page doesn't exist. Have a look at my blog or
                    visit my homepage!
                </p>
            </div>
            <div class="button-fixed-container-dark">
                <Link to="/blog" className="button-fixed">
                    View Blog
                </Link>
                <Link to="/" className="button-fixed">
                    View Homepage
                </Link>
            </div>
        </main>
    );
}

export default NotFound;
