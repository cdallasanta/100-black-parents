import React from 'react';
import BlogCard from '../components/BlogCard'
import '../stylesheets/blogs.scss'

const BlogList = ({blogs}) => {
  function renderBlogs() {
    return blogs.map((b, i) => {
      return <BlogCard blog={b} key={i} />
    })
  }

  return (
    <div id="blogs-section">
      <h3>Blogs</h3>
      <div id="blogs-div">
        {renderBlogs()}
      </div>
    </div>
  )
}

export default BlogList;