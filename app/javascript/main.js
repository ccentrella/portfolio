window.onload = function() {
    loadFunctions();
  };

// Functions to be performed automatically when page is loaded
function loadFunctions() {
    stickyNavbar();

    if(document.getElementById("post_title") != null)
        updatePostTitleHeight();
}

// Prevent user from entering line breaks in textarea
function preventLineBreaks(elem) {
    elem.onkeydown = (e) => {
        if (e.key == "Enter") {
            e.preventDefault()
        }
      };
}

// Update the height of the title in the blog post creator
function updatePostTitleHeight () {
    let postTitle = document.getElementById("post_title");

    // First set to auto, which will decrease scroll height if text has been removed
    postTitle.style.height = "auto";
    postTitle.style.height = `${postTitle.scrollHeight}px`;
  }