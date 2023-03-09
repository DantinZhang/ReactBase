import React, { PureComponent } from 'react'
import Counter from './Counter'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Counter/>
      </div>
    )
  }
}

export default App