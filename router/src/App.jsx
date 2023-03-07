import React, { PureComponent } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import NotFound from './pages/NotFound';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          Header<hr />
          <Link to='/home'>点击切换到Home</Link><hr />
          <Link to='/detail'>点击切换到detail</Link><hr />
          <Link to='/login'>点击切换到登录页</Link><hr />
        </div>
        <div className="content">
          中间的路由内容
          <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        <div className="foorer">Footer</div>
      </div>
    )
  }
}

export default App