import React from 'react'
import { Link } from 'react-router'

class Photo extends React.Component {

  render() {
    const {post} = this.props
    return (
      <figure className="grid-figure">
        <img src={this.props.post.display_src} />
        <Link to={`/view/${post.id}`}>{ this.props.post.caption }</Link>
      </figure>
    )
  }

}

export default Photo