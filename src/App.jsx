import { Button, Layout } from 'antd';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sidebar from './Components/Sidebar/Sidebar';
import CustomHeader from './Components/Header/Header';
import MainContent from './Components/Content/MainContent';
import SideContent from './Components/Content/SideContent';
import Home from './Components/Pages/Home/home';
import Ebook from './Components/Pages/Ebook/ebook';
import Audio from './Components/Pages/Audio/audio';
import Video from './Components/Pages/Video/video';
import Magazines from './Components/Pages/Magazines/magazines';
import MyActivity from './Components/Pages/MyActivity/myactivity';
import History from './Components/Pages/History/history';
import Categories from './Components/Pages/Categories/categories';

import './App.css';

const { Sider, Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout>
        <Sider theme='light' trigger={null} collapsed={collapsed} className='sider'>
          <Sidebar />
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='trigger-btn'
          />
        </Sider>
        <Layout>
          <Header className='header'>
            <CustomHeader />
          </Header>
          <Content className='content'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/ebook" element={<Ebook />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/video" element={<Video />} />
              <Route path="/magazines" element={<Magazines />} />
              <Route path="/myactivity" element={<MyActivity />} />
              <Route path="/history" element={<History />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/"
                element={
                  <div style={{ display: 'flex', gap: 'large' }}>
                    <MainContent />
                    <SideContent />
                  </div>
                }
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
