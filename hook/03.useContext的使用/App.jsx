import React, { memo } from 'react';
import Context from './Context';
import Counter from './Counter';
import { myContext, themeContext } from './MyContext';

const App = memo(() => {
  return (
    <div>
      <h1>App</h1>
      <Counter />

      <myContext.Provider value={{ name: 'zzy', age: 18 }}>
        <themeContext.Provider value={{color:'red',fontSize:'30px'}}>
          <Context />
        </themeContext.Provider>
      </myContext.Provider>
    </div>
  )
})

export default App