import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// 使用 lazy 实现路由懒加载
const Home = lazy(() => import('../pages/Home'));
const Service = lazy(() => import('../pages/Service'));
const Profile = lazy(() => import('../pages/Profile'));

// 定义路由类型
export interface AppRoute extends RouteObject {
  title?: string;
  auth?: boolean;
}

export const routes: AppRoute[] = [
  {
    path: '/',
    element: <Home />,
    title: '首页',
  },
  {
    path: '/service',
    element: <Service />,
    title: '服务',
  },
  {
    path: '/profile',
    element: <Profile />,
    title: '我的',
    auth: true, // 需要登录才能访问
  },
]; 