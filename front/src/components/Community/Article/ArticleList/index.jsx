import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Wrapper from "./style";

import RecipieListDisplay from "../ArticleListDisplay";
import { CommonContext } from "../../../../context/CommonContext";

export default function () {
  // const { serverUrl, user } = useContext(CommonContext);

  const [articleList, setArticleList] = useState([
    {
      id: 1,
      username: "임시1",
      LIKE: [1],
      SAVE: [],
      detail: "아무말아무말",
      comments: { id: 1 },
    },
  ]);

  useEffect(() => {
    // refreshList();
  }, []);

  // function refreshList() {
  //   axios
  //     .get(`${serverUrl}/community/`, {
  //       headers: {
  //         Authorization: `JWT ${user.token}`,
  //       },
  //       // params: {
  //       //   article: 1,
  //       // },
  //     })
  //     .then((res) => {
  //       setArticleList([]);
  //       console.log(res.data);
  //       setArticleList(res.data);
  //       // console.log(this.state.loading);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function likeSubmit(article) {
  //   // console.log(article);
  //   axios
  //     .post(
  //       `${serverUrl}/community/article_like/${article.id}/`,
  //       { user: user.user.id }, // 현재 유저 정보 넣기
  //       {
  //         headers: {
  //           Authorization: `JWT ${user.token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data.LIKE);
  //       refreshList();
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function saveSubmit(article) {
  //   // console.log(article);
  //   axios
  //     .post(
  //       `${serverUrl}/community/article_save/${article.id}/`,
  //       { user: user.user.id }, // 현재 유저 정보 넣기
  //       {
  //         headers: {
  //           Authorization: `JWT ${user.token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data.SAVE);
  //       // refreshList();
  //     })
  //     .catch((err) => console.log(err));
  // }

  // let history = useHistory();

  // function DeleteArticle(article) {
  //   console.log(article);
  //   console.log(history);

  //   axios
  //     .delete(`${serverUrl}/community/${article.id}/`, {
  //       headers: {
  //         Authorization: `JWT ${user.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       refreshList();
  //       window.scrollTo(0, 0);
  //       history.push("/Main");
  //     });
  // }

  return (
    <Wrapper>
      ㅇㅇㅇㅇㅇㅇㅇ
      <Grid className="list-box">
        <RecipieListDisplay
          list={articleList}
          // likeSubmit={likeSubmit}
          // saveSubmit={saveSubmit}
          // DeleteArticle={DeleteArticle}
        />
      </Grid>
    </Wrapper>
  );
}
