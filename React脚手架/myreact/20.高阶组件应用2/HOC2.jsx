import React from 'react';
import enhanceContext from './enhanceContext';

function HOC2(props) {
  return (
    <div>
        <h2>子组件2：HOC2</h2>
        <h3>HOC2拿到穿过来的value：{props.name}-{props.age}</h3>
    </div>
  )
}

export default enhanceContext(HOC2);