import React from "react";
import { Row, Col, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (

    <Menu className="menu-top-web" mode="horizontal" overflowedIndicator={<MenuOutlined  twoToneColor="#fff !important"/>}>
      <Menu.Item className="menu-top-web__logo">
        <Link to={"/"}>
          <img src={""} alt="Blog Mario" />
        </Link>
      </Menu.Item>

      <Menu.Item className="menu-top-web__item">
        <Link to={"/blogs"}>BlogWeb</Link>
      </Menu.Item>
      <Menu.Item className="menu-top-web__item">
        <Link to={"admin/blog"}>AdminBlog</Link>
      </Menu.Item>
      <Menu.Item className="menu-top-web__item">
        <Link to={"/blog"}>BlogWeb</Link>
      </Menu.Item>
      <Menu.Item className="menu-top-web__item">
        <Link to={"admin/blog"}>AdminBlog</Link>
      </Menu.Item>
      <Menu.Item className="menu-top-web__item">
        <Link to={"/blog"}>BlogWeb</Link>
      </Menu.Item>
      <Menu.Item className="menu-top-web__item">
        <Link to={"admin/blog"}>AdminBlog</Link>
      </Menu.Item>
      <Menu.Item className="menu-top-web__item">
        <Link to={"/blog"}>BlogWeb</Link>
      </Menu.Item>
      <Menu.Item className="menu-top-web__item">
        <Link to={"admin/blog"}>AdminBlog</Link>
      </Menu.Item>
    </Menu>

    // <div >
    //  <Row justify="center" className="menu-top-web">
    //       <Col lg={6} md={6}  xs={20} className="menu-top-web-col">
    //         <div className="menu-top-web__logo">
    //           <a  href="#home">
    //             <img
    //               src={"logo"}
    //               alt="Blog"
    //             />
    //           </a>
    //         </div>
    //       </Col>

    //       <Col lg={18} md={18} xs={4}>
    //         <Menu
    //           className="menu-top-web__nav"
    //           defaultSelectedKeys={"/"}
    //           mode="horizontal"
    //           overflowedIndicator={<MenuOutlined  twoToneColor="#fff !important"/>}

    //         >
    //           <Menu.Item key="/">
    //             <a href="#home">HOME</a>
    //           </Menu.Item>
    // <Menu.Item>
    //   <Link to={'/blog'}>
    //   BlogWeb
    //   </Link>

    // </Menu.Item>
    // <Menu.Item>

    // <Link to={'admin/blog'}>
    //   AdminBlog
    //   </Link>
    // </Menu.Item>
    //           <Menu.Item>
    //             <a href="#equipo">NUESTRO EQUIPO</a>
    //           </Menu.Item>
    //           <Menu.Item>
    //             <a href="#contacto">CONTACTO</a>
    //           </Menu.Item>

    //           <Menu.Item>
    //             <a href="/admin">LOGIN</a>
    //           </Menu.Item>
    //         </Menu>
    //       </Col>

    //     </Row>

    // </div>
  );
}
