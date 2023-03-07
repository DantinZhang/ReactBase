import React, { PureComponent } from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import {Routes, Route, Link} from 'react-router-dom';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          Header<hr />
          <Link to='/home'>点击切换到Home</Link><hr />
          <Link to='/detail'>点击切换到detail</Link><hr />
          <Link to='/search'>点击切换到search</Link><hr />
        </div>
        <div className="content">
          中间的路由内容
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </div>
        <div className="foorer">Footer</div>
      </div>
    )
  }
}

export default App