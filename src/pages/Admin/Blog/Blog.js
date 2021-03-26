import React, { useEffect, useState } from "react";
import { Button, notification } from "antd";
import Modal from "../../../components/Modal/Modal";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import { getPostsApi } from "../../../api/post";
import PostsList from "../../../components/Admin/Blog/PostList";
import Pagination from "../../../components/Pagination";
import AddEditPostForm from "../../../components/Admin/Blog/AddEditPostForm";
import Header from "../../../components/Web/Header/Header";

import "./Blog.scss";

function Blog(props) {
  const { location, history } = props;
  const [posts, setPosts] = useState(null);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    getPostsApi(4, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPosts(response.posts);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
    setReloadPosts(false);
  }, [page, reloadPosts]);

  const addPost = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={null}
      />
    );
  };

  const editPost = (post) => {
    console.log(post);
    setIsVisibleModal(true);
    setModalTitle("Editar post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={post}
      />
    );
  };

  if (!posts) {
    return null;
  }

  return (
    <div className="blog">
      <Header />
      <div className="blog__add-post">
        <div style={{ margin: "50px" }}></div>

        <Button type="primary" onClick={addPost}>
          Nuevo post
        </Button>
      </div>
      <PostsList
        posts={posts}
        setReloadPosts={setReloadPosts}
        editPost={editPost}
      />
      <Pagination posts={posts} location={location} history={history} />
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="90%"
      >
        {modalContent}
      </Modal>
    </div>
  );
}

export default withRouter(Blog);
