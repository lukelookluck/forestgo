import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import Alert from "../../components/Community/Alert/";
import MenuModal from "../../components/Community/Article/MenuModal/";
import CommentList from "../../components/Community/Comment/CommentList/";
// import { CommonContext } from "../../../../context/CommonContext";

export default function () {
  // const { serverUrl, user } = useContext(CommonContext);

  const user = {
    token: "",
    user: {
      id: 1,
      username: "임시아이디",
      email: "",
    },
  };

  const [articleList, setArticleList] = useState([
    {
      id: 1,
      user: 1,
      username: "임시1",
      LIKE: [1, 2],
      SAVE: [],
      detail: "아무말아무말",
      comments: [
        {
          id: 1,
          username: "아무개",
          content: "아무댓글",
          LIKE: [1, 2],
          replys: [],
        },
        {
          id: 2,
          username: "아무개2",
          content: "아무댓글2",
          LIKE: [1, 2],
          replys: [],
        },
        {
          id: 3,
          username: "아무개3",
          content: "아무댓글3",
          LIKE: [1, 2],
          replys: [],
        },
      ],
    },
    {
      id: 2,
      user: 2,
      username: "임시2",
      LIKE: [2],
      SAVE: [],
      detail: "아무말아무말",
      comments: [
        {
          id: 1,
          username: "아무개",
          content: "아무댓글",
          LIKE: [1, 2],
          replys: [],
        },
        {
          id: 2,
          username: "아무개2",
          content: "아무댓글2",
          LIKE: [1, 2],
          replys: [],
        },
        {
          id: 3,
          username: "아무개3",
          content: "아무댓글3",
          LIKE: [1, 2],
          replys: [],
        },
      ],
    },
    {
      id: 3,
      user: 1,
      username: "임시3",
      LIKE: [2],
      SAVE: [],
      detail:
        "아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말",
      comments: [
        {
          id: 1,
          username: "아무개",
          content: "아무댓글",
          LIKE: [1, 2],
          replys: [],
        },
        {
          id: 2,
          username: "아무개2",
          content: "아무댓글2",
          LIKE: [1, 2],
          replys: [],
        },
        {
          id: 3,
          username: "아무개3",
          content: "아무댓글3",
          LIKE: [1, 2],
          replys: [],
        },
      ],
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

  let history = useHistory();

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

  let article = articleList.map((item, index) => {
    let likeButton = null;
    let countLikeIt1 = null;
    if (item.LIKE.includes(user.user.id)) {
      // 현재 유저가 item.LIKE에 있으면 1 없으면 0
      likeButton = (
        <FavoriteIcon
          className="btn-icon"
          onClick={() => likeIt(item)}
          color="error"
          key={index}
        />
      );
      countLikeIt1 = (
        <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
      );
    } else {
      likeButton = (
        <FavoriteBorderIcon
          className="btn-icon"
          onClick={() => likeIt(item)}
          key={index}
        />
      );
      if (item.LIKE.length) {
        countLikeIt1 = (
          <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
        );
      }
    }
    const [myLike, setMyLike] = useState(item.LIKE.includes(user.user.id));

    function likeIt(item) {
      console.log(item.LIKE);
      if (myLike) {
        item.LIKE.pop();
        setMyLike(false);
      } else {
        item.LIKE.push(user.user.id);
        setMyLike(true);
      }
    }

    const [mySave, setMySave] = useState(item.SAVE.includes(user.user.id));

    const [open, setOpen] = useState(0);
    let saveButton = null;
    if (mySave) {
      saveButton = (
        <BookmarkIcon
          className="btn-icon"
          // onClick={() => {
          //   props.saveSubmit(item);
          //   item.SAVE.pop();
          //   setOpen(0);
          //   setMySave(false);
          //   console.log(item);
          // }}
        />
      );
    } else {
      saveButton = (
        <BookmarkBorderIcon
          className="btn-icon"
          // onClick={() => {
          //   props.saveSubmit(item);
          //   setOpen(1);
          //   setTimeout(() => {
          //     setOpen(0);
          //   }, 3000);
          //   item.SAVE.push(user.user.id);
          //   setMySave(true);

          //   console.log(item);
          // }}
        />
      );
    }

    // let moreButton = (
    //   <a className="more-tag" href="#" onClick={moreContent}>
    //     더보기
    //   </a>
    // );

    let myHide = "";
    if (item.detail.length > 50) {
      myHide = "...";
    }
    const [cardContent, setCardContent] = useState(
      item.detail.substring(0, 50) + myHide
    );

    // function moreContent(e) {
    //   setCardContent("누르면 상세글페이지로");
    //   e.preventDefault();
    // }

    function goArticleDetailPage(id) {
      window.scrollTo(0, 0);
      history.push({
        pathname: `/article/${id}`,
        state: {
          comments: item.comments,
          article: item,
        },
      });
    }

    return (
      <div className="list-card" key={index}>
        <div className="list-user">
          <div>
            <div className="list-avata">
              <AccountCircleIcon className="list-useravata" />
              <div className="list-avata-1">
                <span className="list-username">{item.username}</span>
                <span className="list-username-time">작성시간</span>
              </div>
            </div>
          </div>
          <div>
            {user.user.id === item.user && (
              <MenuModal
                item={item}
                // DeleteArticle={props.DeleteArticle}
              />
            )}
          </div>
        </div>
        <div className="list-item" onClick={() => goArticleDetailPage(item.id)}>
          <div className="list-item-detail">
            {cardContent}

            {/* {myHide} */}
          </div>
          <div className="list-item-imageBox">
            <img className="list-item-image" src="/images/sample.jpg" alt="" />
            {/* <img className="list-item-image" src={item.image} alt="게시글 이미지" /> */}
          </div>
        </div>
        <div className="buttons">
          <div className="like-btn">
            {likeButton}
            {/* {countLikeIt1} */}
            <Link
              className="more-comment"
              to={{
                pathname: "/community/comment",
                state: {
                  comments: item.comments,
                  article: item.id,
                },
              }}
            >
              <InsertCommentOutlinedIcon className="btn-icon" />
            </Link>
          </div>
          {saveButton}
        </div>
        <Alert open={open} setOpen={setOpen} />
        {/* <hr /> */}
        {countLikeIt1}
        {/* <CommentList comments={item.comments} article={item} /> */}
      </div>
    );
  });

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        {article}
      </Grid>
    </Wrapper>
  );
}
