import React, { memo } from 'react';
// import {useState, useEffect} from 'react';
import Counter from './Counter'

const App = memo(() => {
  return (
    <div>
      <h1>App</h1>
      <Counter/>
    </div>
  )
})

export default App