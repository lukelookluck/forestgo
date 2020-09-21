import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import axios from "axios";

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import Alert from "../../components/Community/Alert/";
import MenuModal from "../../components/Community/Article/MenuModal/";
import CommentList from "../../components/Community/Comment/CommentList/";
import CommentForm from "../../components/Community/Comment/CommentForm/";
// import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  console.log(props.location.state);
  const item = props.location.state.article;
  console.log(item);
  // const { serverUrl, user } = useContext(CommonContext);
  const user = {
    token: "",
    user: {
      id: 1,
      username: "임시아이디",
      email: "",
    },
  };
  const [listComment, setListComment] = useState([]);
  const [commentInput, setCommentInput] = useState({
    content: "",
    article: 1,
    parent: null,
    user: user.user.id,
  });

  function handleChangeCommentInput(e) {
    // console.log(e.content);
    setCommentInput({
      ...commentInput,
      content: e.content,
    });
    // console.log("commentinput", commentInput);
  }

  // useEffect(() => {
  //   refreshList();
  // }, []);

  function goBack() {
    props.history.goBack();
  }

  // function refreshList() {
  //   axios
  //     .get(`${serverUrl}/community/comment/`, {
  //       headers: {
  //         Authorization: `JWT ${user.token}`,
  //       },
  //       params: {
  //         article: props.location.state.article,
  //       },
  //     })
  //     .then((res) => {
  //       setListComment(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function handleSubmit(data) {
  //   axios
  //     .post(`${serverUrl}/community/comment/`, data, {
  //       headers: {
  //         Authorization: `JWT ${user.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       commentInput.content = "";
  //       commentInput.parent = null;

  //       refreshList();

  //       setTimeout(() => {
  //         refreshList();
  //       }, 3000);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function likeSubmit(comment) {
  //   axios
  //     .post(
  //       `${serverUrl}/community/comment/like/${comment.id}/`,
  //       { user: user.user.id }, // 현재 유저 정보 넣기
  //       {
  //         headers: {
  //           Authorization: `JWT ${user.token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);

  //       refreshList();
  //     })
  //     .catch((err) => console.log(err));
  // }

  function doReply(reply) {
    setCommentInput({
      ...commentInput,
      content: "@" + reply.username + " ",
      parent: reply.id,
    });
  }

  const [clicked, setClicked] = useState(1);
  const [myClicked, setMyClicked] = useState(true);
  let [a, setA] = useState("");

  let [deleteBtn, setDeleteBtn] = useState(null);
  // deleteBtn = (
  //   <DeleteIcon className="comment-list-header-delete-click" fontSize="large" />
  // );

  function clickComment(e, comment) {
    if (a) {
      if (myClicked) {
        e.target.closest(".comment-single").style.background = "#e0f2ff";
      } else {
        a.style.background = "";
      }
    } else {
      if (myClicked) {
        e.target.closest(".comment-single").style.background = "#e0f2ff";
      } else {
        e.target.closest(".comment-single").style.background = "";
      }
    }
    if (a !== e.target.closest(".comment-single")) {
      a = "";
    }
    setMyClicked(!myClicked);

    setClicked(!clicked);
  }

  // function DeleteComment(comment) {
  //   axios
  //     .delete(`${serverUrl}/community/comment/${comment.id}/`, {
  //       headers: {
  //         Authorization: `JWT ${user.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setClicked(1);
  //       refreshList();
  //       window.scrollTo(0, 0);
  //       // history.push("/Main");
  //     });
  // }

  let commentHeader = null;
  if (clicked) {
    commentHeader = (
      <div className="comment-list-header">
        <ArrowBackOutlinedIcon
          className="comment-list-header-arrow"
          fontSize="large"
          onClick={goBack}
        />
        {/* <span className="comment-list-header-title">댓글</span> */}
      </div>
    );
  } else {
    commentHeader = (
      <div className="comment-list-header-clicked">
        <div className="comment-list-header-clicked-1">
          <div>
            <ClearIcon
              className="comment-list-header-arrow-click"
              fontSize="large"
              onClick={(e) => clickComment(e)}
            />
          </div>
          <span className="comment-list-header-title-click">선택됨</span>
        </div>
        {deleteBtn}
      </div>
    );
  }

  return (
    <Wrapper>
      <Grid>
        {commentHeader}

        <div className="list-card">
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
          </div>
          <div className="list-item">
            <div className="list-item-detail">{item.detail}</div>
            <div className="list-item-imageBox">
              <img
                className="list-item-image"
                src="/images/sample.jpg"
                alt=""
              />
              {/* <img className="list-item-image" src={item.image} alt="" /> */}
            </div>
          </div>
          <div className="buttons">
            <div className="like-btn">
              {/* {likeButton} */}
              {/* {countLikeIt1} */}
              {/* <Link
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
              </Link> */}
            </div>
            {/* {saveButton} */}
          </div>
          {/* <Alert open={open} setOpen={setOpen} /> */}
          {/* <hr /> */}
          {/* {countLikeIt1} */}
          {/* <CommentList comments={item.comments} article={item} /> */}
        </div>

        <div className="comment-list-box">
          <CommentList
            comments={listComment}
            // likeSubmit={likeSubmit}
            doReply={doReply}
            clickComment={clickComment}
            clicked={clicked}
            setA={setA}
            a={a}
            deleteBtn={deleteBtn}
            setDeleteBtn={setDeleteBtn}
            // DeleteComment={DeleteComment}
          />
        </div>
        <CommentForm
          commentInput={commentInput}
          // setCommentInput={this.state.setCommentInput}
          setCommentInput={handleChangeCommentInput}
          // handleSubmit={handleSubmit} // 부모에서 자식으로 부모 이벤트 넘겨줄 떄 자식에선 'props.부모이벤트' 로 사용
          // this.setState({ listComment: res.data });
        />
      </Grid>
    </Wrapper>
  );
}
