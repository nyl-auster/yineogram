import React from 'react'

class Comments extends React.Component {

  render () {
    const { comments } = this.props
    return (
      <div className="comments">
        {comments && comments.map((comment, index) => (
          <div className="comment" key={index}>
            <p><strong>{comment.user}</strong></p> 
            {comment.text}
            <button className="remove-comment">&times;</button>
          </div>
        ))}
      </div>
    )
  }

}

export default Comments