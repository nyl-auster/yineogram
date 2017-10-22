import React from 'react'

class Comments extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
  }

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
        <form ref="comments" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }

}

export default Comments