import React, { Component } from 'react'

class Banner extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>Banner</div>
    )
  }
}

export default Banner