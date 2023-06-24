import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({item}) => {

  return (
    <div>
        <Link to="/Blog" state={item}>
            {item.title} {item.image} {item.description}
        </Link>
    </div>

  )
}

export default BlogCard