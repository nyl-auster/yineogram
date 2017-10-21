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
        <form ref="comments" className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }

}

export default Comments