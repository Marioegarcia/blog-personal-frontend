import React from "react";
import { Row, Col,Layout } from "antd";
import { useParams } from "react-router-dom";
import PostsListWeb from "../components/Web/Blog/PostsListWeb";
import PostInfo from "../components/Web/Blog/PostInfo";
import Ultimos from "../components/Web/Ultimos";

const {  Content } = Layout;

export default function Blog(props) {
  const { location, history } = props;
  const { url } = useParams();

  return (
   
      <Row>
      <Col className='container__publicidad' flex="1 1 200px">
        <div  >
        PUBLICIDAD...
        <br/>
        PUBLICIDAD...
        <br/>
        PUBLICIDAD...
        <br/>
        </div>
        
      </Col>
      <Col className='container__post' >
        {url ? (
          <PostInfo url={url} />
        ) : (
          <PostsListWeb  location={location} history={history} />
        )}
      </Col>
      <Col className='container__publicidad' flex="1 1 200px">
       <div  className='container__publicidad' >
          PUBLICIDAD...
          <br/>
          PUBLICIDAD...
          <br/>
          PUBLICIDAD...
          <br/>
        </div>
      </Col>
    </Row>

     
   
  );
}