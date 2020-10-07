import React, { useState, useContext } from "react";

import Wrapper from "./style";

import Grid from "@material-ui/core/Grid";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

import { CommonContext } from "../../../context/CommonContext";

export default function (props) {
  const { user } = useContext(CommonContext);

  const [myIndex, setMyIndex] = useState(2);

  function moreComment() {
    setMyIndex(myIndex + 2);
    console.log(myIndex);
  }

  const [showReplysBool, setshowReplysBool] = useState(false);
  let showReplys = null;
  if (!showReplysBool) {
    // console.log("폴스!!");
    if (myIndex < props.replys.length && props.replys.length > 2) {
      showReplys = (
        <span className="more-reply" onClick={moreComment}>
          이전 답글 {props.replys.length - myIndex}개 보기
        </span>
      );
    }
    if (props.replys.length > 2 && myIndex >= props.replys.length) {
      // console.log("숨기기");
      showReplys = (
        <span className="more-reply" onClick={switcher}>
          답글 숨기기
        </span>
      );
    }
  } else {
    console.log("트루");
    showReplys = (
      <span className="more-reply" onClick={switcher}>
        답글 {props.replys.length}개 보기
      </span>
    );
  }

  function switcher() {
    setshowReplysBool(!showReplysBool);
    console.log(showReplysBool);
  }

  let replys = props.replys.reverse().map((reply, idx) => {
    function getTime(myTime) {
      let theTime = null;

      const now = new Date();
      const old = new Date(myTime);
      const gap = now - old;
      const sec_gap = Math.floor(gap / 1000);
      const min_gap = Math.floor(sec_gap / 60);
      const hour_gap = Math.floor(min_gap / 60);
      const day_gap = Math.floor(hour_gap / 24);
      const mon_gap = Math.floor(day_gap / 12);

      // console.log(sec_gap, min_gap, hour_gap, day_gap, mon_gap);
      // console.log(old, now);
      if (mon_gap >= 1) {
        theTime = (
          <span className="comment-createdTime" key={idx}>
            {mon_gap}월 전
          </span>
        );
      } else {
        if (day_gap >= 1) {
          theTime = (
            <span className="comment-createdTime" key={idx}>
              {day_gap}일 전
            </span>
          );
        } else {
          if (hour_gap >= 1) {
            theTime = (
              <span className="comment-createdTime" key={idx}>
                {hour_gap}시간 전
              </span>
            );
          } else {
            if (min_gap >= 1) {
              theTime = (
                <span className="comment-createdTime" key={idx}>
                  {min_gap}분 전
                </span>
              );
            } else {
              if (sec_gap >= 1) {
                theTime = (
                  <span className="comment-createdTime" key={idx}>
                    {sec_gap}초 전
                  </span>
                );
              } else {
                theTime = (
                  <span className="comment-createdTime" key={idx}>
                    등록 중
                  </span>
                );
              }
            }
          }
        }
      }
      return <div>{theTime}</div>;
    }

    let likeButton = null;
    let countLikeIt1 = null;
    if (reply.LIKE.includes(user.user.id)) {
      likeButton = (
        <FavoriteIcon
          onClick={() => props.likeIt(reply)}
          color="error"
          key={idx}
        />
      );
      countLikeIt1 = (
        <span className="comment-likeIt-count">
          좋아요 {reply.LIKE.length}개
        </span>
      );
    } else {
      likeButton = (
        <FavoriteBorderIcon onClick={() => props.likeIt(reply)} key={idx} />
      );
      countLikeIt1 = (
        <span className="comment-likeIt-count">
          좋아요 {reply.LIKE.length}개
        </span>
      );
    }

    function clickReply(e, reply) {
      props.setA(e.target.closest(".comment-single"));
      // console.log(props.a);
      if (user.user.id === reply.user) {
        props.setDeleteBtn(
          <DeleteIcon
            className="comment-list-header-delete-click"
            fontSize="large"
            onClick={() => props.DeleteComment(reply)}
          />
        );
      } else {
        props.setDeleteBtn("");
      }
      props.clickComment(e, reply);
    }

    if (showReplysBool === false && idx < myIndex) {
      return (
        <div className="comment-single reply-single" key={idx}>
          <AccountCircleTwoToneIcon className="reply-avata" fontSize="large" />
          <div className="reply-single-left">
            <div
              className="reply-single-left-1"
              onClick={(e) => clickReply(e, reply)}
            >
              <div className="reply-username">
                {reply.username}
                <div className="reply-content">{reply.content}</div>
              </div>
            </div>
            <div className="reply-single-left-2">
              {/* <div className="reply-createdTime">작성시간</div> */}
              {getTime(reply.created_at)}
              {countLikeIt1}
            </div>
          </div>
          <div className="reply-likeIt">{likeButton}</div>
        </div>
      );
    }
  });

  return (
    <Wrapper>
      <Grid className="replys-box">
        {/* {props.replys.length} {myIndex} */}
        {showReplys}
        {replys}
      </Grid>
    </Wrapper>
  );
}
