import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="item-details">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="avatar-container">
            <img className="avatar-img" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
