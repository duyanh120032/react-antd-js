import { Layout } from "antd";
import { RouterContent } from "./Routes";
import SideMenu from "./Layout/SideMenu/index.jsx";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <SideMenu/>
        <Layout className="site-layout">
            <Header className="site-layout-background" />
            <Content className="px-4 py-4">
                <RouterContent />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Dashboard Template ©2022 Created by 10% Engineer
            </Footer>
        </Layout>
    </Layout>
  );
}

export default App;
