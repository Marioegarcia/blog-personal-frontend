import React, { useState, useEffect } from 'react';
import { Row, Col, Layout,Divider, Skeleton } from "antd";
import Banner from "../components/Web/Banner/Banner";
import Categorias from "../components/Web/Categorias/Categorias";
import Destacados from "../components/Web/Destacados";
import Ultimos from "../components/Web/Ultimos";

import { getPostsBannerApi, getAvatarApi } from "../api/post";


const { Header , Content, Sider ,Footer} = Layout;

export default function Home() {
    


  
  

  return (
    <>
   


    <Banner/>
    <div>
     
      <div className='container'>
        <Divider plain orientation='left' >Destacados</Divider>

        <Destacados/>
        
        <Divider plain orientation='left' >Ultimos</Divider>

        <Ultimos/>
      </div>
     

    </div>
    
    </>
    
    
  );
}
