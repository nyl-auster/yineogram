import React from 'react'

class Comments extends React.Component {

  render () {
    const { comments } = this.props
    return (
      <div className="comment">
        {comments && comments.map((comment, index) => (
          <div key={index}>
            {comment.text}
            {comment.user}
          </div>
        ))}
      </div>
    )
  }

}

export default Comments