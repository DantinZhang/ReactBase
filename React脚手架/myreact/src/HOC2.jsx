import React from 'react';
import loginAuth from './loginAuth';

function HOC2(props) {
  return (
    <div>
        <h2>子组件2：HOC2</h2>
    </div>
  )
}

export default loginAuth(HOC2);