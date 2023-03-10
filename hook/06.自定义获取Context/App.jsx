import React, { memo } from 'react';
import { useUserToken } from './hook';

const Son1 = memo(() => {
  const [userInfo, token] = useUserToken();
  return (
    <div>
      <h1>Son1</h1>
      <h2>{userInfo.name}-{token}</h2>
    </div>
  )
})

const Son2 = memo(() => {
  const [userInfo, token] = useUserToken();
  return (
    <div>
      <h1>Son2</h1>
      <h2>{userInfo.age}-{token}</h2>
    </div>
  )
})

const App = memo(() => {
  return (
    <div>
      <h1>App</h1>
      <Son1/>
      <Son2/>
    </div>
  )
})

export default App