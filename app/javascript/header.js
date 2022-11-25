import stickyNavbar from "./stickyNavbar"
import { loadFunctions } from "./application"

window.onload = function() {
    loadFunctions();
  };

window.onscroll = function() {
    let header = document.getElementsByTagName("header")[0];
    if (header != null)
        stickyNavbar();
}