import React from 'react'

class Photo extends React.Component {

  render() {
    return (
      <figure className="grid-figure">
        <img src={this.props.post.display_src} />
        { this.props.post.caption }
      </figure>
    )
  }

}

export default Photo