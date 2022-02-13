import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

export default function AppLayout({children}) {

  const { Header, Content, Footer } = Layout;


  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1" ><Link to="/">Logo</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/">Kesfet</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/profile">Profile</Link></Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64,  backgroundColor: 'black' }}>
    
      <div className="site-layout-background" style={{ padding: 24, minHeight: '100vh', backgroundColor: 'black' }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}
