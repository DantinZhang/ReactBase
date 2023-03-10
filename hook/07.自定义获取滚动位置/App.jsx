import React, { memo, useEffect } from 'react';
import { useUserToken, useScrollY } from './hook';
import './home.css';

const Son1 = memo(() => {
  let [myScrollY] = useScrollY();

  return (
    <div>
      <h1>Son1</h1>
      <h2>当前滚动到：{myScrollY}</h2>
    </div>
  )
})

const Son2 = memo(() => {
  let [myScrollY] = useScrollY();

  return (
    <div>
      <h1>Son2</h1>
      <h2>当前滚动到：{myScrollY}</h2>
    </div>
  )
})

const App = memo(() => {
  let [myScrollY] = useScrollY();

  return (
    <div>
      <h1>App</h1>
      <h2>当前滚动到：{myScrollY}</h2>
      <Son1 />
      <Son2 />
    </div>
  )
})

export default App