import React, { PureComponent } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';
import { Routes, Route, Link, Navigate, } from 'react-router-dom';
import NotFound from './pages/NotFound';
import enhanceUseNavigate from './utils/enhanceUseNavigate';

export class App extends PureComponent {
  navigateTo(path) {
    //在这里就可以调用注入的跳转函数，传入path进行路由跳转
    this.props.navigate(path);
  }

  render() {
    return (
      <div>
        <div className="header">
          Header<hr />
          <Link to='/home'>点击切换到Home</Link>
          <Link to='/detail'>点击切换到detail</Link>
          <Link to='/login'>点击切换到登录页</Link><br />
          <button onClick={() => this.navigateTo('/home')}>点击按钮跳转到Home</button>
          <button onClick={() => this.navigateTo('/detail')}>点击按钮跳转到detail</button>
          <button onClick={() => this.navigateTo('/login')}>点击按钮跳转到登录页</button>
        </div>
        <div className="content">
          <h4>中间的路由内容：</h4>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
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

export default enhanceUseNavigate(App);