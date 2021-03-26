import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";

import './LayoutAdmin.scss';


export default function LayoutAdmin(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    
    return (
        <Layout>
       
        <Layout
          className="layout-admin"
          
        >
          <Header className="layout-admin__header">
            {/* <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            /> */}
          </Header>
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes} />
          </Content>
          <Footer className="layout-admin__footer">
            Blog MEGH
          </Footer>
        </Layout>
      </Layout>
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