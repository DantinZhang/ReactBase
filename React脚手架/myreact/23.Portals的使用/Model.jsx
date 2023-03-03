import React, { PureComponent } from 'react'
import {createPortal} from 'react-dom';

export class Model extends PureComponent {
  render() {
    return (
      <div>
        <h1>Model</h1>
        {createPortal(this.props.children, document.querySelector('#model'))}
      </div>
    )
  }
}

export default Model