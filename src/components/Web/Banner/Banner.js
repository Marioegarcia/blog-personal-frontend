import React, { useState, useEffect } from "react";
import { Carousel, Col, Card, Typography, Row } from "antd";
import { Link } from "react-router-dom";
import { getPostsBannerApi, getAvatarApi } from "../../../api/post";

import "./Banner.scss";

const { Meta } = Card;

export default function Banner() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPostsBannerApi().then((response) => {
      setPosts(response);
    });
  }, []);

  

  if (posts) {
    const data = posts.post;

    
    
    return (
      <>
      <Carousel dotPosition="top" autoplay>
        
      {
        data.map((data,index) => 
         <Ban data={data} key={index}/>
        )
      }
       
        
      </Carousel>
      
      </>
    )
  }

  return null;
}




function Ban(props) {
  const data = props.data;
  
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (data) {
      getAvatarApi(data.img).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [data]);
 
  return (
    <>
    <div className='imageContainer'>
      <div className='content-img'>
            <img className='image' src={avatar}  />
      </div>
    <div className='intro'>
     <div className='aboutMe'>
        <h3 className='h3About'>  {data.title} </h3>
        <p className='h3About'> {data.description} </p>
      </div> 
    </div>
      
    </div>
    
      
    
    </>

  )
}










// function Carusel(props) {
//   const data = props.data;

  // const item = data.map((i) => {

  //   return (
  //     <Imagen data={i} /> 
  //   )
  // });

//   return (
//     <>
   
//         <Carousel 
//         dotPosition="top"
//     //    autoplay 
//     //autoplaySpeed={2600}  
//        >
           
//               {item} 
           
        
   
           
//        </Carousel>
    
       
    
      
//     </>
//   );
// }




// function Imagen(props) {
//   //console.log(props.data);
//   const data = props.data;

  // const [avatar, setAvatar] = useState(null);
  // useEffect(() => {
  //   if (data) {
  //     getAvatarApi(data.img).then((response) => {
  //       setAvatar(response);
  //     });
  //   } else {
  //     setAvatar(null);
  //   }
  // }, [data]);

//   const contentStyle = {
//     color: '#fff',
//     background: '#364d79',
//     heigth: '500px',
    
    
//   };

//   return (
//     <>
//        <div class="contenedor">
//         <img src={avatar} className='main-banner' />
        
        
//         <div class="centrado">
//             <Link>
//             <h3>
//             {data.title}   
//             </h3>
//             <p> {data.description} </p>
//             <button>boton</button>
//             </Link>
            
//         </div>
       

//         </div>
        
        
//     </>
//   );
// }

