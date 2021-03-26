import React from 'react'
import { List, Button, Icon, Modal, notification } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { deletePostApi } from "../../../../api/post";

import './PostList.scss'



const { confirm } = Modal;


export default function PostList(props) {
    const { posts, setReloadPosts, editPost } = props;
    
    const deletePost = post => {
      
      confirm({
        title: "Eliminando post",
        content: `¿Estas segurod de eliminar el post ${post.title}?`,
        okText: "Eliminar",
        okType: "danger",
        cancelText: "Cancelar",
        onOk() {
          deletePostApi( post._id)
            .then(response => {
              const typeNotification =
                response.code === 200 ? "success" : "warning";
              notification[typeNotification]({
                message: response.message
              });
              setReloadPosts(true);
            })
            .catch(() => {
              notification["error"]({
                message: "Error del servidor."
              });
            });
        }
      });
    };

    
    

   


    return (
        <div className="posts-list">
            <List
              itemLayout="horizontal"
                dataSource={posts.docs}
                renderItem={post => (
                <Post post={post} deletePost={deletePost} editPost={editPost} />
                )}
            />


        </div>
    )
}


function Post(props) {
    const { post, deletePost, editPost } = props;
  
    return (
      <List.Item
        actions={[
          <Link to={`/blog/${post.url}`} target="_blank">
            <Button type="primary" icon={<EyeOutlined />}>
             
            </Button>
          </Link>,
          <Button type="primary" icon={<EditOutlined />} onClick={() => editPost(post)}>
           
          </Button>,
          <Button type="danger" icon={<DeleteOutlined />} onClick={() => deletePost(post)}>
            
          </Button>
        ]}
      >
        <List.Item.Meta title={post.title} description={post.description} />
      </List.Item>
    );
  }