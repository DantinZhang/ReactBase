import React, { memo, useEffect, useState } from 'react'

function useLogLife(cname) {
  useEffect(() => {
    console.log(cname + '组件挂载')
    return () => {
      console.log(cname + '组件被卸载')
    }
  }, [cname])
}

const Son1 = memo(() => {
  useLogLife('Son1');
  return (
    <div>
      <h1>Son1</h1>
    </div>
  )
})

const Son2 = memo(() => {
  useLogLife('Son2');
  return (
    <div>
      <h1>Son2</h1>
    </div>
  )
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true);
  useLogLife('App');
  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setIsShow(!isShow)}>切换组件</button>
      {isShow && <Son1 />}
      {!isShow && <Son2 />}
    </div>
  )
})

export default App