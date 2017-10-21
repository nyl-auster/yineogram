import React from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {

  render () {
    return (
      <div className="photo-grid">
        {this.props.posts.map(post => (
          <Photo key={post.id} post={post} />
        ))}
      </div>
    )
  }

}

export default PhotoGrid