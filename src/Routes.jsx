import About from './pages/About';
import Home from "./pages/Home";
import {
  DesktopOutlined,
  FileImageOutlined,
  DollarOutlined,
  LineChartOutlined,
  FlagOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

export const routes = [
  {
    component: <Home/>,
    icon: <DesktopOutlined />,
    key: '/',
    label: 'Home',
    children: [
      {
        component: <>Home child</>,
        icon: <DesktopOutlined />,
        key: '/home1',
        label: 'Home',
      },
      {
        component: <Home/>,
        icon: <DesktopOutlined />,
        key: '/',
        label: 'Home',
        children: [
          {
            component: <>Home child child</>,
            icon: <DesktopOutlined />,
            key: '/home1/child1',
            label: 'Home child child ',
            meta:{
                title: 'Home child child'
            }
          }
        ]
      }
    ],
  },
  {
    component: <About />,
    icon: <FileImageOutlined />,
    key: '/about',
    label: 'About',
  },
];
export const RouterContent = () => {
  const result = [];

  const dfs = (routes) => {
    routes.forEach((item) => {
      result.push(
        <Route
          element={item.component}
          key={item.key}
          path={item.key?.toString()}
        />,
      );
      if (item.children) {
        dfs(item.children);
      }
    });
  };
  dfs(routes);

  return <Routes>{result}</Routes>;
};
