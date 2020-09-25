import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import CommentList from "../../Comment/ArticleUnderCommentList";
import MenuModal from "../MenuModal";
import Alert from "../../Alert";

export default function (props) {
  // const { user } = useContext(CommonContext);
  const user = {
    token: "",
    user: {
      id: 1,
      username: "임시아이디",
      email: "",
    },
  };
  console.log(user);
  let article = props.list.map((item, index) => {
    let likeButton = null;
    let countLikeIt1 = null;
    if (item.LIKE.includes(user.user.id)) {
      // 현재 유저가 item.LIKE에 있으면 1 없으면 0
      likeButton = (
        <FavoriteIcon
          className="btn-icon"
          onClick={likeIt}
          color="error"
          key={index}
        />
      );
      countLikeIt1 = (
        <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
      );
    } else {
      likeButton = (
        <FavoriteBorderIcon className="btn-icon" onClick={likeIt} key={index} />
      );
      if (item.LIKE.length) {
        countLikeIt1 = (
          <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
        );
      }
    }

    function likeIt() {
      props.likeSubmit(item);
    }

    const [mySave, setMySave] = useState(item.SAVE.includes(user.user.id));

    const [open, setOpen] = useState(0);
    let saveButton = null;
    if (mySave) {
      saveButton = (
        <BookmarkIcon
          className="btn-icon"
          onClick={() => {
            props.saveSubmit(item);
            item.SAVE.pop();
            setOpen(0);
            setMySave(false);
            console.log(item);
          }}
        />
      );
    } else {
      saveButton = (
        <BookmarkBorderIcon
          className="btn-icon"
          onClick={() => {
            props.saveSubmit(item);
            setOpen(1);
            setTimeout(() => {
              setOpen(0);
            }, 3000);
            item.SAVE.push(user.user.id);
            setMySave(true);

            console.log(item);
          }}
        />
      );
    }

    let moreButton = (
      <a className="more-tag" href="#" onClick={moreContent}>
        더보기
      </a>
    );

    const [myHide, setmyHide] = useState(moreButton);

    const [cardContent, setCardContent] = useState(
      item.detail.substring(0, 50) + "..."
    );

    function moreContent(e) {
      setCardContent(<div>하이~</div>);
      setmyHide(null);
      e.preventDefault();
    }

    return (
      <div className="list-card" key={index}>
        <div className="list-user">
          <div>
            <div className="list-avata">
              <AccountCircleIcon className="list-useravata" />
              <span className="list-username">{item.username}</span>
            </div>
          </div>
          <div>
            {user.user.id === item.user && (
              <MenuModal item={item} DeleteArticle={props.DeleteArticle} />
            )}
          </div>
        </div>
        <div className="list-item">
          <div className="list-item-imageBox">
            {/* <img className="list-item-image" src="images/sample.jpg" alt="" /> */}
            <img className="list-item-image" src={item.image} alt="" />
          </div>
          <div className="list-item-detail">
            <div className="detail-content">
              <p className="cname">" {item.title} "</p>
              {cardContent}
              {myHide}
            </div>
          </div>
        </div>
        <div className="like-button">
          <div>
            {likeButton}
            {/* {countLikeIt} */}
            &nbsp;&nbsp;&nbsp;
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

  return <Wrapper>{article}</Wrapper>;
}
