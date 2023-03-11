import React, { memo, useEffect, useState } from 'react';
import { useUserToken, useScrollY, useChangeLocalStorage } from './hook';
import './home.css';

const Son1 = memo(() => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [name, setName] = useState(localStorage.getItem('name'));

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token])

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name])

  function changeToken() {
    setToken('fsldkjflekjfk')
  }

  function changeName() {
    setName('zzy')
  }

  return (
    <div>
      <h1>Son1</h1>
      <button onClick={changeToken}>点击修改token</button>
      <button onClick={changeName}>点击修改名字</button>
    </div>
  )
})

const Son2 = memo(() => {
  let [token, setToken] = useChangeLocalStorage('token');
  let [name, setName] = useChangeLocalStorage('name');

  function changeToken() {
    setToken('fsldkjflekjfk')
  }

  function changeName() {
    setName('zzy')
  }
  return (
    <div>
      <h1>Son2</h1>
      <button onClick={changeToken}>点击修改token</button>
      <button onClick={changeName}>点击修改名字</button>
    </div>
  )
})

const App = memo(() => {

  return (
    <div>
      <h1>App</h1>
      <Son1 />
      <Son2 />
    </div>
  )
})

export default App