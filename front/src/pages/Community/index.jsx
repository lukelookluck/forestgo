import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";

import MenuModal from "../../components/Community/Article/MenuModal/";
import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  const { serverUrl, user } = useContext(CommonContext);

  const [articleList, setArticleList] = useState([]);
  const [myBool, setMyBool] = useState(false);

  useEffect(() => {
    refreshList();
  }, []);

  let emptyWord = "";
  if (articleList.length === 0 && myBool) {
    emptyWord = (
      <div className="emptyWord-box">
        <div className="emptyWord">텅</div>
        <div className="emptyWord2">게시글이 없어요</div>
      </div>
    );
  }

  function refreshList() {
    if (props.myarticle) {
      axios
        .get(`${serverUrl}/community/my_article`, {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
          params: {
            user: user.user.id,
          },
        })
        .then((res) => {
          console.log(res.data);
          setArticleList(res.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
            history.push("/");
          }
        });
    } else {
      axios
        .get(`${serverUrl}/community/`, {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setArticleList(res.data);
          setMyBool(true);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
            history.push("/");
          }
        });
    }
  }

  function likeSubmit(article) {
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
      .then((res) => {})
      .catch((err) => console.log(err));
  }

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
          <span className="countLikeIt1">댓글 {item.comments.length}개</span>
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

      function getTime(myCreateTime, myUpdateTime) {
        let myTime = myCreateTime;
        let updateComment = "";
        if (myCreateTime.slice(0, 19) !== myUpdateTime.slice(0, 19)) {
          myTime = myUpdateTime;
          updateComment = " (수정됨)";
        }
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
        if (year_gap >= 1) {
          theTime = (
            <span className="comment-createdTime" key={index}>
              {old.getFullYear()}년 {old.getMonth()}월 {old.getDate()}일
              {updateComment}
            </span>
          );
        } else {
          if (mon_gap >= 1) {
            theTime = (
              <span className="comment-createdTime" key={index}>
                {old.getMonth()}월 {old.getDate()}일{updateComment}
              </span>
            );
          } else {
            if (day_gap >= 1) {
              theTime = (
                <span className="comment-createdTime" key={index}>
                  {day_gap}일 전{updateComment}
                </span>
              );
            } else {
              if (hour_gap >= 1) {
                theTime = (
                  <span className="comment-createdTime" key={index}>
                    {hour_gap}시간 전{updateComment}
                  </span>
                );
              } else {
                if (min_gap >= 1) {
                  theTime = (
                    <span className="comment-createdTime" key={index}>
                      {min_gap}분 전{updateComment}
                    </span>
                  );
                } else {
                  if (sec_gap >= 1) {
                    theTime = (
                      <span className="comment-createdTime" key={index}>
                        몇초 전{updateComment}
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
                    {getTime(item.created_at, item.updated_at)}
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
            </div>
            <div className="list-item-imageBox">
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
        </div>
      );
    });

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        {emptyWord}
        {article}
      </Grid>
    </Wrapper>
  );
}
