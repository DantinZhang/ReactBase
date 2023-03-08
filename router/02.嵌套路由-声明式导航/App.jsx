import React, { PureComponent } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Column1 from './pages/Column1';
import Column2 from './pages/Column2';
import Column3 from './pages/Column3';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          Header<hr />
          <Link to='/home'>点击切换到Home</Link>
          <Link to='/detail'>点击切换到detail</Link>
          <Link to='/login'>点击切换到登录页</Link>
        </div>
        <div className="content">
          中间的路由内容
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} >
              <Route path='/home' element={<Navigate to='/home/column1' />}></Route>
              <Route path='/home/column1' element={<Column1 />}></Route>
              <Route path='/home/column2' element={<Column2 />}></Route>
              <Route path='/home/column3' element={<Column3 />}></Route>
            </Route>
            <Route path='/detail' element={<Detail />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className="foorer">Footer</div>
      </div>
    )
  }
}

export default App