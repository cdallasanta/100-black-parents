import React from 'react';
import Blog from '../components/Blog'
import '../stylesheets/blogs.scss'

const BlogList = ({blogs}) => {
  function renderBlogs() {
    return blogs.map((b, i) => {
      return <Blog blog={b} key={i} />
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