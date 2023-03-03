import React from 'react';
import computeInterval from './computeInterval';

function HOC2(props) {
  return (
    <div>
        <h2>子组件2：HOC2</h2>
    </div>
  )
}

export default computeInterval(HOC2);