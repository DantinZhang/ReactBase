import React from 'react';
import GrandSon from './GrandSon';

export class Son extends React.Component {
  render() {
    return (
      <div>
        <h1>Son组件</h1>
        <GrandSon />
      </div>

    )
  }
}

export default Son