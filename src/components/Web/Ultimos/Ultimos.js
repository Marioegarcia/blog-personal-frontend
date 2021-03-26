import React, { useEffect, useState } from "react";
import { List, Card, Row, Col } from "antd";

import { getUltimos } from "../../../api/post";

import "./Ultimos.scss";

const { Meta } = Card;

export default function Ultimos() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getUltimos().then((response) => {
      setPosts(response);
    });
  }, []);

  if (posts) {
    const data = posts.post;

    return (
      <>
        <div className="courses-list">
          <h2>ultimas entradas</h2>
        
          
        </div>
        
      </>
    );
  }

  return null;
}


