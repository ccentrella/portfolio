// Update the height of the title in the blog post creator
export function updatePostTitleHeight () {
    let postTitle = document.getElementById("post_title");

    // First set to auto, which will decrease scroll height if text has been removed
    postTitle.style.height = "auto";
    postTitle.style.height = `${postTitle.scrollHeight}px`;
  }
