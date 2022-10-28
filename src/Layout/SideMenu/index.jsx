import { routes } from '../../Routes.jsx';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const { useState } = React;
const SideMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onMenuClick = (event) => {
    navigate(event.key);
  };
  return (
    <Layout.Sider
      collapsed={collapsed}
      collapsible
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        defaultSelectedKeys={['dashboard']}
        items={routes}
        mode="inline"
        onClick={onMenuClick}
        selectedKeys={[location.pathname]}
        theme="dark"
      />
    </Layout.Sider>
  );
};

export default SideMenu;
