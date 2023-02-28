import React, { Component } from 'react';

class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sonData: '我是子组件数据'
    }
  }

  sendData() {
    //调用父组件传的函数并把子组件数据作为参数传过去
    this.props.getSonData(this.state.sonData);
  }

  render() {
    return (
      <div>
        <h2>子组件</h2>
        <button onClick={this.sendData.bind(this)}>点击把子组件数据传给父组件</button>
      </div>
    )
  }
}

export default Son;