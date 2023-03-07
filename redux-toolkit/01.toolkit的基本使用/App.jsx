import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Login />
        <Home />
      </div>
    )
  }
}

export default App;