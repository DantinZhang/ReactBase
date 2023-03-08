import React from 'react';
import {Link, useNavigate, useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  let navigate = useNavigate();
  
  function navigateTo(path) {
    navigate(path);
  }

  return (
    <div>
      <div className="header">
        Header<hr />
        <Link to='/home'>点击切换到Home</Link>
        <Link to='/detail/123'>点击切换到Detail并传123</Link>
        <Link to='/detail/321'>点击切换到Detail并传321</Link>
        <Link to='/detail/999'>点击切换到Detail并传999</Link><br />
        <Link to='/login?name=zzy&age=18'>点击切换到登录页并传参</Link>
        <button onClick={() => navigateTo('/home')}>点击按钮跳转到Home</button>
        <button onClick={() => navigateTo('/detail')}>点击按钮跳转到detail</button>
        <button onClick={() => navigateTo('/login')}>点击按钮跳转到登录页</button>
      </div>
      <div className="content">
        <h4>中间的路由内容：</h4>
        {/* <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} >
            <Route path='/home' element={<Navigate to='/home/column1' />}></Route>
            <Route path='/home/column1' element={<Column1 />}></Route>
            <Route path='/home/column2' element={<Column2 />}></Route>
            <Route path='/home/column3' element={<Column3 />}></Route>
          </Route>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}

        {useRoutes(routes)}
      </div>
      <div className="foorer">Footer</div>
    </div>
  )
}

export default App;