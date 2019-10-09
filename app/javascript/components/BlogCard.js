import React from 'react';

const BlogCard = ({blog}) => {
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

export default BlogCard;