import { lazy } from 'react';

// 懒加载路由组件
const Home = lazy(() => import('../pages/Home'));
const Service = lazy(() => import('../pages/Service'));
const Profile = lazy(() => import('../pages/Profile'));

export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/service',
    element: Service,
  },
  {
    path: '/profile',
    element: Profile,
  },
];

export default routes; 