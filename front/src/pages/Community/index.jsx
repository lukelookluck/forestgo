import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";

import Alert from "../../components/Community/Alert/";
import MenuModal from "../../components/Community/Article/MenuModal/";
import CommentList from "../../components/Community/Comment/CommentList/";
import { CommonContext } from "../../context/CommonContext";

export default function () {
  const { serverUrl, user } = useContext(CommonContext);

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);

  function refreshList() {
    axios
      .get(`${serverUrl}/community/`, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
        // params: {
        //   user: 3,
        // },
      })
      .then((res) => {
        // setArticleList([]);
        console.log(res.data);
        setArticleList(res.data);
        // setTimeout(() => {
        //   refreshList();
        // }, 3000);
      })
      .catch((err) => console.log(err));
  }

  function likeSubmit(article) {
    console.log("article", article);
    axios
      .post(
        `${serverUrl}/community/article/${article.id}/`,
        { user: user.user.id }, // 현재 유저 정보 넣기
        {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
        }
      )
      .then((res) => {
        // refreshList();
      })
      .catch((err) => console.log(err));
  }

  // function saveSubmit(article) {
  //   console.log(article);
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

  function DeleteArticle(article) {
    axios
      .delete(`${serverUrl}/community/${article.id}/`, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
      .then((res) => {
        refreshList();
        window.scrollTo(0, 0);
        history.push("/Main");
      });
  }

  let article = articleList
    .sort((a, b) => b.id - a.id)
    .map((item, index) => {
      let likeButton = null;
      let countLikeIt1 = null;
      let myLike = item.LIKE.includes(user.user.id);
      let countComment = null;

      if (item.comments.length) {
        countComment = (
          <span className="countLikeIt1">댓글 {item.commentcnt}개</span>
        );
      } else {
        countComment = <span className="countLikeIt1"> </span>;
      }

      if (myLike) {
        likeButton = (
          <FavoriteIcon
            className="btn-icon"
            onClick={() => {
              likeIt(item);
            }}
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
            onClick={() => {
              likeIt(item);
            }}
            key={index}
          />
        );
        if (item.LIKE.length) {
          countLikeIt1 = (
            <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
          );
        }
      }

      function likeIt(item) {
        console.log("myLike", myLike);
        let array = item.LIKE;
        if (myLike) {
          likeSubmit(item);
          setArticleList([
            ...articleList.slice(0, index),
            {
              ...articleList[index],
              LIKE: array.filter((id) => id !== user.user.id),
              SAVE: array.filter((id) => id !== user.user.id),
            },
            ...articleList.slice(index + 1, articleList.length),
          ]);
        } else {
          likeSubmit(item);
          setArticleList([
            ...articleList.slice(0, index),
            {
              ...articleList[index],
              LIKE: array.concat([user.user.id]),
              SAVE: array.concat([user.user.id]),
            },
            ...articleList.slice(index + 1, articleList.length),
          ]);
        }
      }

      let myHideTitle = "";
      if (item.title.length > 11) {
        myHideTitle = "...";
      }
      let cardTitle = item.title.substring(0, 11) + myHideTitle;

      let myHideComment = "";
      if (item.detail.length > 50) {
        myHideComment = "...";
      }
      let cardContent = item.detail.substring(0, 50) + myHideComment;

      // function moreContent(e) {
      //   setCardContent("누르면 상세글페이지로");
      //   e.preventDefault();
      // }

      function goArticleDetailPage(item) {
        window.scrollTo(0, 0);
        history.push({
          pathname: `/article/${item.id}`,
          state: {
            comments: item.comments,
            article: item,
          },
        });
      }

      function getTime(myTime) {
        let theTime = null;

        const now = new Date();
        const old = new Date(myTime);
        const gap = now - old;
        const sec_gap = Math.floor(gap / 1000);
        const min_gap = Math.floor(sec_gap / 60);
        const hour_gap = Math.floor(min_gap / 60);
        const day_gap = Math.floor(hour_gap / 24);
        const mon_gap = Math.floor(day_gap / 30);
        const year_gap = Math.floor(mon_gap / 12);
        // console.log(sec_gap, min_gap, hour_gap, day_gap, mon_gap);
        // console.log(old, now);
        if (year_gap >= 1) {
          theTime = (
            <span className="comment-createdTime" key={index}>
              {old.getFullYear()}년 {old.getMonth()}월 {old.getDate()}일
            </span>
          );
        } else {
          if (mon_gap >= 1) {
            theTime = (
              <span className="comment-createdTime" key={index}>
                {old.getMonth()}월 {old.getDate()}일
              </span>
            );
          } else {
            if (day_gap >= 1) {
              theTime = (
                <span className="comment-createdTime" key={index}>
                  {day_gap}일 전
                </span>
              );
            } else {
              if (hour_gap >= 1) {
                theTime = (
                  <span className="comment-createdTime" key={index}>
                    {hour_gap}시간 전
                  </span>
                );
              } else {
                if (min_gap >= 1) {
                  theTime = (
                    <span className="comment-createdTime" key={index}>
                      {min_gap}분 전
                    </span>
                  );
                } else {
                  if (sec_gap >= 1) {
                    theTime = (
                      <span className="comment-createdTime" key={index}>
                        몇초 전
                      </span>
                    );
                  } else {
                    theTime = (
                      <span className="comment-createdTime" key={index}>
                        등록 중
                      </span>
                    );
                  }
                }
              }
            }
          }
        }

        return <div>{theTime}</div>;
      }

      return (
        <div className="list-card" key={index}>
          <div className="list-user">
            <div>
              <div className="list-avata">
                <AccountCircleIcon className="list-useravata" />
                <div className="list-avata-1">
                  <span className="list-username">{item.username}</span>
                  <span className="list-username-time">
                    {getTime(item.created_at)}
                  </span>
                </div>
              </div>
            </div>
            <div>
              {user.user.id === item.user && (
                <MenuModal item={item} DeleteArticle={DeleteArticle} />
              )}
            </div>
          </div>
          <div className="list-item" onClick={() => goArticleDetailPage(item)}>
            <div className="list-item-detail">
              <div className="list-item-title">{cardTitle}</div>
              {cardContent}

              {/* {myHide} */}
            </div>
            <div className="list-item-imageBox">
              {/* <img className="list-item-image" src="/images/sample.jpg" alt="" /> */}
              <img
                className="list-item-image"
                src={item.image}
                alt="게시글 이미지"
              />
            </div>
          </div>
          <div className="buttons">
            <div className="like-btn">
              {likeButton}
              <div className="more-comment">
                <ModeCommentOutlinedIcon
                  className="btn-icon"
                  onClick={() => goArticleDetailPage(item)}
                />
              </div>
            </div>
          </div>
          <div className="mention-group">
            {countLikeIt1}
            {countComment}
          </div>
          {/* <Alert open={open} /> */}
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
