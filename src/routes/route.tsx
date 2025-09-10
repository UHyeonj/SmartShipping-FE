import { createBrowserRouter } from 'react-router';
import { Outlet, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayOut';
import Login from '../pages/Login';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true, // 기본 경로 '/'에서 home으로 자동 리다이렉트
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

export default routes;
