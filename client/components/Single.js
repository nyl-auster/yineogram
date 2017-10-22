import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {

  render() {
    const postId = this.props.params.postId
    const index = this.props.posts.findIndex(post => post.code === postId)
    const post = this.props.posts[index]
    const comments = this.props.comments[post.code] || []
    return (
      <div className="single-photo">
        <Photo {...this.props} post={post} index={index} />
        <Comments {...this.props} comments={comments} />
      </div>
    )
  }

}

export default Single