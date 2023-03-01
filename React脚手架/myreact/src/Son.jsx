import React from 'react';

export class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'zzy',
      age: 18,
    }
  }

  changeName() {
    //setState的更多用法：

    //1.基本使用,传入配置对象,不是覆盖原来的state,而是进行对象的合并
    // this.setState({
    //   name: 'ht'  //原理:对象的合并Object.assign(state, newState)
    // })

    //2.传入一个回调，可以接收修改之前的state和props
    // this.setState((state,props) => {
    //   console.log(state,props);
    //   return {
    //     name: 'ht' //这里也可以进行更改
    //   }
    // })

    //3.setState是一个异步调用
    //如果想等数据更新后做一些操作，可以传入第二个参数：回调
    //第二个参数执行的时机就是数据更新完之后
    this.setState({ name: 'ht' }, () => {
      console.log('数据已更新，值为', this.state.name)
    })
    console.log('数据未更新：', this.state.name); //zzy而不是ht
  }

  render() {
    console.log('render执行')
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>点击修改名字</button>
      </div>

    )
  }
}

export default Son