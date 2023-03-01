import React from 'react'

export class GrandSon extends React.Component {
  render() {
    console.log('子组件render')
    let {age} = this.props;
    return (
      <div>
        <h1>{age}</h1>
      </div>
    )
  }
}

export default GrandSon