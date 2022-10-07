import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// Connects to data-controller="react"
export default class extends Controller {
    connect() {
        // const app = document.getElementById("app");
        // createRoot(app).render(<App />);

        const hero = document.getElementById("hero");
        if (hero != null) {
            createRoot(hero).render(<Hero />);
        }

        const footer = document.getElementById("footer");
        createRoot(footer).render(<Footer />);
    }
}
