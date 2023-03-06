import React, { PureComponent } from 'react';
import {subtract} from '../store/actionCreators';
import {connect} from 'react-redux';

export class Son extends PureComponent {

  changeNum(num) {
    this.props.sonSubtract(num) 
  }

  render() {
    let { sonCounter } = this.props;
    return (
      <div>
        <h1>Son</h1>
        <h2>{sonCounter}</h2>
        <button onClick={() => this.changeNum(-1)}>点击-1</button>
      </div>
    )
  }
}

//调用connect返回一个高阶组件（函数）
//高阶组件中传入我们要加点料的组件
// connect第一个参数是一个函数，可以用来注入store
const mapStateToProps = (state) => {
  //返回一个对象，这样可以读到store中state的数据，并把这个数据
  // 通过connect()返回的高阶组件注入到Son的props中
  return {
    sonCounter: state.counter  
  }
}

//connect的第二个参数是一个函数，用来注入dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    sonSubtract(num) {
      dispatch(subtract(num))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Son);