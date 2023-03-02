import React from 'react'

export class Son2 extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (this.props.age != nextProps.age || this.props.name != nextProps.name) {
      return true;
    } else {
      return false;
    }

    //如果子组件有自己的state，也要判断一下
    // if (this.state.xxx != nextState.xxx) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

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