import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addNumber, changeMsg } from './store/modules/home';

const Son = memo(() => {
  const { msg } = useSelector((state) => {
    return {
      msg: state.home.message
    }
  }, shallowEqual);
  console.log('子组件渲染');
  const dispatch = useDispatch();

  function changeMsgHandle() {
    dispatch(changeMsg('你好'))
  }
  return (
    <div>
      <h1>Son</h1>
      <h2>{msg}</h2>
      <button onClick={changeMsgHandle}>修改message</button>
    </div>
  )
})

const App = memo(() => {
  const state1 = useSelector((state) => {
    return {
      count: state.home.counter
    }
  }, shallowEqual);

  const dispatch = useDispatch();
  function changeNum(num) {
    dispatch(addNumber(num))
  }
  console.log('父组件渲染', state1.count)
  return (
    <div>
      <h1>App</h1>
      <h2>{state1.count}</h2>
      <button onClick={e => changeNum(1)}>点击修改state中的counter</button>
      <Son />
    </div>
  )
})

export default App