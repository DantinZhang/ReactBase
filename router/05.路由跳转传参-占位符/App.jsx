import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Detail from './pages/Detail';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  
  function navigateTo(path) {
    navigate(path);
  }

  return (
    <div>
      <div className="header">
        Header<hr />
        <Link to='/detail/123'>点击切换到detail并传参</Link>
      </div>
      <div className="content">
        <h4>中间的路由内容：</h4>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
      <div className="foorer">Footer</div>
    </div>
  )
}

export default App;