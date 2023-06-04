// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "./controllers"
import "trix"
import "@rails/actiontext"
import { updatePostTitleHeight } from "./post"

// Prevent user from entering line breaks in textarea
window.preventLineBreaks = function preventLineBreaks(elem) {
    elem.onkeydown = (e) => {
        if (e.key == "Enter") {
            e.preventDefault()
        }
      };
}

// Functions to be performed automatically when page is loaded
window.onload = function() {

    if(document.getElementById("post_title") != null)
        updatePostTitleHeight();

}
