import React, { Component } from 'react';
import GrandSon from './GrandSon';
import myContext from '../context'

export class Son extends Component {
  render() {
    console.log('Son',this.context);
    return (
      <div>
        {/* 2.传过来的props也是一个对象，直接结构继续往下传 */}
        <GrandSon {...this.props} />
      </div>
    )
  }
}

Son.contextType = myContext;
export default Son