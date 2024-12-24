import { Tabs } from 'antd';
import { HomeOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      key: '/message',
      label: (
        <div className="tab-item">
          <MessageOutlined className="tab-icon" />
          <span className="tab-label">托育问答</span>
        </div>
      ),
    },
    {
      key: '/',
      label: (
        <div className="tab-item">
          <HomeOutlined className="tab-icon" />
          <span className="tab-label">首页</span>
        </div>
      ),
    },
    {
      key: '/my',
      label: (
        <div className="tab-item">
          <UserOutlined className="tab-icon" />
          <span className="tab-label">我的</span>
        </div>
      ),
    },
  ];

  const onChange = (key) => {
    navigate(key);
  };

  return (
    <div className="layout-container">
      <div className="content">
        {children}
      </div>
      <Tabs
        activeKey={location.pathname}
        onChange={onChange}
        items={tabs}
        centered
        className="tab-bar"
      />
    </div>
  );
};

export default Layout;
