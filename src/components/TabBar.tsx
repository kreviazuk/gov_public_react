import { TabBar } from 'antd-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import { tabBarRoutes } from '../router/nav';

const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TabBar
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
      activeKey={location.pathname}
      onChange={value => navigate(value)}
    >
      {tabBarRoutes.map(item => (
        <TabBar.Item 
          key={item.key} 
          icon={<item.icon />} 
          title={item.title} 
        />
      ))}
    </TabBar>
  );
};

export default BottomTabBar; 