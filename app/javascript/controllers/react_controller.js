import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from '../components/App';

// Connects to data-controller="react"
export default class extends Controller {
    connect() {
        const root = createRoot(document.getElementById('root'));
        root.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}
