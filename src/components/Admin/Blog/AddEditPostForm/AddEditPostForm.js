import React, { useState, useEffect, useCallback } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  notification,
  Upload,
  Avatar,
} from "antd";
import { useDropzone } from "react-dropzone";
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import {
  addPostApi,
  updatePostApi,
  uploadAvatarApi,
} from "../../../../api/post";
import { FontSizeOutlined, UploadOutlined } from "@ant-design/icons";

import "./AddEditPostForm.scss";

const { TextArea } = Input;

export default function AddEditPostForm(props) {
  const { setIsVisibleModal, setReloadPosts, post } = props;
  const [postData, setPostData] = useState({});
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({});
    }
  }, [post]);

  const processPost = () => {
    const { title, description, date, content } = postData;

    if (!title || !description || !date || !content) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      if (!post) {
        addPost();
      } else {
        updatePost();
      }
    }
  };

  const addPost = () => {
    const formData = new FormData();

    formData.append("img", avatar.img);
    formData.append("post", JSON.stringify(postData));

    addPostApi(formData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
        setReloadPosts(true);
        setPostData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
  };

  const updatePost = () => {
    updatePostApi(post._id, postData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
        setReloadPosts(true);
        setPostData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
  };

  const disabledDate = () => {
    const current = new Date();

    return current && current < moment().startOf("month");
  };

  return (
    <div className="add-edit-post-form">
      <AddEditForm
        postData={postData}
        setPostData={setPostData}
        avatar={avatar}
        setAvatar={setAvatar}
        post={post}
        processPost={processPost}
        disabledDate={disabledDate}
      />
    </div>
  );
}

function AddEditForm(props) {
  const {
    postData,
    setPostData,
    post,
    processPost,
    disabledDate,
    avatar,
    setAvatar,
  } = props;

  return (
    <Form className="add-edit-post-form" layout="inline" onFinish={processPost}>
      <Row gutter={24}>
        <Row gutter={24}>
          <Col span={12}>
            <Input
              prefix={<FontSizeOutlined />}
              placeholder="Titulo"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />

            <TextArea
              placeholder="Descripcion de publicacion"
              showCount
              maxLength={100}
              value={postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
            />

            <Form.Item></Form.Item>
          </Col>

          <Col span={12}>
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YYYY HH:mm:ss"
              placeholder="Fecha de publicación"
              disabledDate={disabledDate}
              value={postData.date && moment(postData.date)}
              showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
              onChange={(e, value) =>
                setPostData({
                  ...postData,
                  date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString(),
                })
              }
            />

            <input
              id="fileinput"
              onChange={(e) => setAvatar({ ...avatar, img: e.target.files[0] })}
              className="form-control"
              type="file"
            />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={24}>
            <Editor
              value={postData.content ? postData.content : ""}
              init={{
                height: 400,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
              }}
              onBlur={(e) =>
                setPostData({ ...postData, content: e.target.getContent() })
              }
            />
          </Col>
        </Row>
      </Row>

      <Button type="primary" htmlType="submit" className="btn-submit">
        {post ? "Actualizar post" : "Crear post"}
      </Button>
    </Form>
  );
}

function UploadAvatar(props) {
  const { avatar, setAvatar } = props;
  const [avatarUrl, setAvatarUrl] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setAvatar({ file, preview: URL.createObjectURL(file) });
    },
    [setAvatar]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });

  return (
    <div className="upload-avatar" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Avatar size={150} />
      ) : (
        <Avatar size={150} src={avatarUrl} />
      )}
    </div>
  );
}
