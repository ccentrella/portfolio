import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App"
import Hero from "../components/Hero"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {

    // const app = document.getElementById("app");
    // createRoot(app).render(<App />);

    const hero = document.getElementById("hero");
    createRoot(hero).render(<Hero />);
  }
}
