import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>
          {/* 路由组件的跳转标签 */}
          <Link to='/home/column1'>栏目1</Link>
          <Link to='/home/column2'>栏目2</Link>
          <Link to='/home/column3'>栏目3</Link>
        </h2>

        {/* 路由组件的出口 */}
        <Outlet /> 

        <hr style={{marginBottom: '20px'}} />
      </div>
    )
  }
}

export default Home