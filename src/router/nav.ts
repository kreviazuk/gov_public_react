import { 
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined
} from '@ant-design/icons';

export const tabBarRoutes = [
  {
    key: '/',
    title: '首页',
    icon: HomeOutlined,
  },
  {
    key: '/service',
    title: '服务',
    icon: AppstoreOutlined,
  },
  {
    key: '/profile',
    title: '我的',
    icon: UserOutlined,
  },
]; 