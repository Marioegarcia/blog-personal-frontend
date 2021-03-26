import React from 'react'
import { Route, Switch} from "react-router-dom";
import { Layout, Menu,Skeleton } from 'antd';
import  MenuTop  from "../components/Web/Header/Header";
import Banner from '../components/Web/Banner/Banner';
import Categorias from '../components/Web/Categorias/Categorias';

import './LayoutBasic.scss';

const { Header , Content, Sider ,Footer} = Layout;
const { SubMenu } = Menu;


export default function LayoutBasic(props) {
    const { routes } = props;
   
 

    return (
      <>
 
   
 <Layout>
      <Header>
        <MenuTop /> 
      </Header>
      
      <Layout>
      <Sider
      className='sider'
      breakpoint="sm"
      collapsedWidth="0"
      
    >
      
      <Categorias/>
    </Sider>
        <Content className='container' >
        <LoadRoutes routes={routes} />
        </Content>
        <Sider
      className='sider'
      breakpoint="lg"
      collapsedWidth="0"
    >
      
      <Categorias/>
    </Sider>
      </Layout>

      <Footer className='footer-basic'>
      <Skeleton  paragraph={{ rows: 4 }} />
  
      </Footer>
    </Layout>
   
  
    {/* <Layout className="container">
      
    

        <Header>
         <MenuTop />  
        </Header>

        <Layout>
        
        <Content>
          <LoadRoutes routes={routes} />
        </Content>  
        </Layout>
        
       
    
      
    </Layout> */}
      
      
    </>
    )
}



function LoadRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }