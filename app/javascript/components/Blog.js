import React from 'react';

const Blog = ({blog}) => {
  return (
    <div className="blog-card">
      <div className="blog-title">
        {blog.title}
      </div>
      <div className="blog-teaser">
        {blog.content}
      </div>
    </div>
  )
}

export default Blog;