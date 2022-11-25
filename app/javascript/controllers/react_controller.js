import { Controller } from "@hotwired/stimulus";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "../components/App";

let container = null;

// Connects to data-controller="react"
export default class extends Controller {
    connect() {
        if (container == null) {
          container = document.getElementById('app');
          createRoot(container).render(<Router><App/></Router>);
        }
    }
}
