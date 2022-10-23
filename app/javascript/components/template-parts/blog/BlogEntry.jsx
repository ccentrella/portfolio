import React from 'react'
import { Link } from 'react-router-dom'

function BlogEntry(post) {
  return (
    <article className="post-item">
      <h2 className="post-item-title"><Link to={post.title}>post_path(post)</Link></h2>
      <p className="post-item-date">post.get_date</p>
      {/* <% if post.description.present? %>
        <p class="post-item-description">{post.description}</p>
      <% end %> */}
</article>
  )
}

export default BlogEntry;