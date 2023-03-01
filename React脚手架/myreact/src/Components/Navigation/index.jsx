import React, { Component } from 'react'


export class Navigation extends Component {
  render() {
    //props中的children可以接收到子组件插槽中的react元素
    let {children,left,middle,right} = this.props;
    console.log(children)
    return (
      <div  className='box'>
        {/* <div>{children[0]}</div>
        <div>{children[1]}</div>
        <div>{children[2]}</div> */}
        {left}
        {right}
        {middle}
      </div>
    )
  }
}

export default Navigation