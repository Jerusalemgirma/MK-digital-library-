import { Button, Flex, Layout } from 'antd';
import {useState} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import Sidebar from './Components/Sidebar/Sidebar';
import CustomHeader from './Components/Header/Header'
import MainContent from './Components/Content/MainContent'
import SideContent from './Components/Content/SideContent'

import './App.css'

const {Sider, Header, Content}=Layout;

 const App = () => {
   const [collapsed, setCollapsed] = useState(false)
  return (
  <Layout>
    <Sider theme='light' trigger={null} collapsed={collapsed} className='sider'>
      <Sidebar/>
      <Button type='text' icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} onClick={()=> setCollapsed(!collapsed)} className='triger-btn'/>
    </Sider>
    <Layout>
      <Header className='header'>
        <CustomHeader/>
      </Header>
      <Content className='content'>
        <Flex gap="large">
          <MainContent/>
          <SideContent/>
        </Flex>
      </Content>
    </Layout>
  </Layout>
  );
}
export default App;