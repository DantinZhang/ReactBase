import Home from '../pages/Home';
import Login from '../pages/Login';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';
import Column1 from '../pages/Column1';
import Column2 from '../pages/Column2';
import Column3 from '../pages/Column3';
import { Navigate } from 'react-router-dom';

let routes = [
    {
        path: '/',
        element: <Navigate to='/home' />  //重定向
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '/home',
                element: <Navigate to="/home/column1" /> //重定向
            },
            {
                path: '/home/column1',
                element: <Column1 />
            },
            {
                path: '/home/column2',
                element: <Column2 />
            },
            {
                path: '/home/column3',
                element: <Column3 />
            }
        ]
    },
    {
        path: '/detail/:id',
        element: <Detail />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes;