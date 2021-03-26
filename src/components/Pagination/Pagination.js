import React from "react";
import { Pagination as PaginationAntd } from "antd";

import "./Pagination.scss";

export default function Pagination(props) {
  const { posts, location, history } = props;
  const currentPage = parseInt(posts.page);
 

  // console.log(posts);

  const onChangePage = newPage => {
    history.push(`${location.pathname}?page=${newPage}`);
    window.scrollTo(0, 0);
  };

  return (
    <PaginationAntd
      defaultCurrent={currentPage}
      total={posts.totalDocs}
      pageSize={posts.limit}
      onChange={newPage => onChangePage(newPage)}
      className="pagination"
    />
  );
}