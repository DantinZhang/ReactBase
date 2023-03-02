import React from 'react';

export class Son1 extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps,nextState);
    return false;
  }

  render() {
    console.log('Son1的render执行')
    return (
      <div>
        <h2>Son1</h2>
      </div>
    )
  }
}

export default Son1