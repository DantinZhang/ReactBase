import React from 'react'

export class Son2 extends React.PureComponent {

  render() {
    console.log('Son2的render执行')
    let { age } = this.props;
    return (
      <div>
        <h1>{age}</h1>
      </div>
    )
  }
}

export default Son2