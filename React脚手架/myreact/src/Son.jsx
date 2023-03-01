import React from 'react';
import GrandSon from './GrandSon';

export class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'zzy',
      age: 18,
    }
  }

  changeName() {
    // this.setState({
    //   name: this.state.name + 'ht'
    // })
    // this.setState({
    //   name: this.state.name + 'ht'
    // })
    // this.setState({
    //   name: this.state.name + 'ht'
    // })
    this.setState((state) => {
      return {
        name: state.name + 'ht'
      }
    })
    this.setState((state) => {
      return {
        name: state.name + 'ht'
      }
    })
    this.setState((state) => {
      return {
        name: state.name + 'ht'
      }
    })
  }

  changeAge() {
    this.setState({
      age: 100
    })
    //一大坨代码，要执行一年
  }
  render() {
    console.log('render执行')
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>点击修改名字</button>
        <button onClick={(() => this.changeAge())}>点击修改年龄</button>
        <GrandSon age={this.state.age}/>
      </div>

    )
  }
}

export default Son