import React, { PureComponent } from 'react';
import store from '../store';
import {subtract} from '../store/actionCreators';
import {connect} from 'react-redux';

export class Son extends PureComponent {

  changeNum(num) {
    store.dispatch(subtract(num))
  }

  render() {
    let { Soncounter } = this.props;
    return (
      <div>
        <h1>Son</h1>
        <h2>{Soncounter}</h2>
        <button onClick={() => this.changeNum(-1)}>点击-1</button>
      </div>
    )
  }
}

//调用connect返回一个高阶组件（函数）
//高阶组件中传入我们要注入store的组件
const mapStateToProps = (state) => {
  //返回一个对象，这样可以读到store中state的数据，并把这个数据
  // 通过connect()返回的高阶组件注入到Son的props中
  return {
    Soncounter: state.counter  
  }
}
export default connect(mapStateToProps)(Son);