import React from 'react'
import Photo from './Photo'

class Single extends React.Component {

  render() {
    const postId = this.props.params.postId
    const index = this.props.posts.findIndex(post => post.code === postId)
    const post = this.props.posts[index]
    return (
      <div className="single-photo">
        <Photo {...this.props} post={post} index={index} />
      </div>
    )
  }

}

export default Single