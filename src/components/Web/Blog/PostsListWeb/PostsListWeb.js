import React, { useState, useEffect } from "react";
import { 
  Spin, 
  List, 
  notification, 
  Space, 
  Avatar,
  Card 
} from "antd";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import moment from "moment";
import queryString from "query-string";
import Pagination from "../../../Pagination";

import { getPostsApi, getAvatarApi } from "../../../../api/post";
import "moment/locale/es";


import "./PostsListWeb.scss";



const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);



const { Meta } = Card;

export default function PostsListWeb(props) {
  const { location, history } = props;
  const [posts, setPosts] = useState(null);

  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(12, page)
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
  }, [page]);

  if (posts) {
  
   const data = posts.docs;

  return (
    <>
      {/* <Helmet>
        <title>Blog de programación | Agustín Navarro Galdon</title>
      </Helmet> */}
       <div className="courses-list">
       <h1>Blog</h1>
        <List
        className='courses-list__course'
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={data}
          renderItem={post => (
            <List.Item>
              <Post ultimo={post} />
            </List.Item>
          )}
        />
         <Pagination posts={posts} location={location} history={history} />
          
        </div>

      
    </>




  );
  }
  return (
    <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }} />
  );
}

// function Post(props) {
//     const { post } = props;
//     const day = moment(post.date).format("DD");
//     const month = moment(post.date).format("MMMM");
//     console.log(post.title);
//     return (
//       <List.Item
//         key={post.title}

//         extra={
//           <img
//             width={272}
//             alt="logo"
//             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
//           />
//         }
//       >
      //   <List.Item.Meta

      //     title={<a >{post.title}</a>}

      //   />
      //   <div style={{'width': '20%'}}>
      //     {post.description}
      //   </div>

      // </List.Item>
//     );
//   }



function Post(props) {
  
  const [avatar, setAvatar] = useState(null);
  const post = props.ultimo;
  

  useEffect(() => {
    if (post) {
      getAvatarApi(post.img).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [post]);

  
  const year = moment(post.date).format("LL");

  return (
    <>
    
     

    <Link to={`/blog/${post.url}`}>
    
    <Card
        className='tarjeta'
        
        cover={
          <img
            alt={post.title}
            src={avatar}
            style={{ height: 140 }}
          />
        }
      >
        <Meta title={post.title} description={post.description} />
      
      <a>Leer mas...</a>
      </Card>
     
    </Link>
    </>
  );
}





// import React, { useState, useEffect } from "react";
// import { Spin, List, notification, Space, Avatar } from "antd";
// import { Link } from "react-router-dom";
// // import { Helmet } from "react-helmet";
// import moment from "moment";
// import queryString from "query-string";
// import Pagination from "../../../Pagination";
// import { getPostsApi, getAvatarApi } from "../../../../api/post";
// import "moment/locale/es";


// import "./PostsListWeb.scss";

// const IconText = ({ icon, text }) => (
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );

// export default function PostsListWeb(props) {
//   const { location, history } = props;
//   const [posts, setPosts] = useState(null);

//   const { page = 1 } = queryString.parse(location.search);

//   useEffect(() => {
//     getPostsApi(12, page)
//       .then((response) => {
//         if (response?.code !== 200) {
//           notification["warning"]({
//             message: response.message,
//           });
//         } else {
//           setPosts(response.posts);
//         }
//       })
//       .catch(() => {
//         notification["error"]({
//           message: "Error del servidor.",
//         });
//       });
//   }, [page]);

//   if (!posts) {
//     return (
//       <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }} />
//     );
//   }

//   return (
//     <>
//       {/* <Helmet>
//         <title>Blog de programación | Agustín Navarro Galdon</title>
//       </Helmet> */}
      
//       <div className="posts-list-web">
//         <h1>Blog</h1>
//         <List
//           dataSource={posts.docs}
//           renderItem={(post) => <Post post={post} />}
//         />
//         <Pagination posts={posts} location={location} history={history} />
//       </div>
//     </>
//   );
// }

// // function Post(props) {
// //     const { post } = props;
// //     const day = moment(post.date).format("DD");
// //     const month = moment(post.date).format("MMMM");
// //     console.log(post.title);
// //     return (
// //       <List.Item
// //         key={post.title}

// //         extra={
// //           <img
// //             width={272}
// //             alt="logo"
// //             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
// //           />
// //         }
// //       >
//       //   <List.Item.Meta

//       //     title={<a >{post.title}</a>}

//       //   />
//       //   <div style={{'width': '20%'}}>
//       //     {post.description}
//       //   </div>

//       // </List.Item>
// //     );
// //   }



// function Post(props) {
//   const { post } = props;
//   const [avatar, setAvatar] = useState(null);


//   useEffect(() => {
//     if (post) {
//       getAvatarApi(post.img).then((response) => {
//         setAvatar(response);
//       });
//     } else {
//       setAvatar(null);
//     }
//   }, [post]);

  
//   const year = moment(post.date).format("LL");

//   return (
//     <>
    
     

//     <Link to={`/blog/${post.url}`}>
    
//       <List.Item className='post-info'>

//         <List.Item.Meta
//           avatar={<Avatar 
//             size={{
//               xs: 120,
//               sm: 100,
//               md: 200,
//               lg: 240,
//               xl: 250,
//               xxl: 250,
//             }}  
//             shape="square"
              
//             src={avatar}
//           />}
          
//           title={post.title}
//           description= {post.description}
//         />
//       </List.Item>
     
//     </Link>
//     </>
//   );
// }
