import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";

let container = null;

// Connects to data-controller="react"
export default class extends Controller {
    connect() {
        if (container == null) {
          container = document.getElementById('app');
          createRoot(container).render(<App />);
        }
    }
}
