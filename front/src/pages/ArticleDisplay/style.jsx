import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "NanumSquareRound";

  & .list-card {
    margin-top: 80px;
    margin-bottom: 10vw;
    /* width: 92.3vw; */
    text-align: left;
  }

  & .list-user {
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
    /* padding-bottom: 5px; */
    /* width: 100%; */
  }

  & .list-avata {
    display: flex;
  }

  & .list-avata-1 {
    display: flex;
    flex-direction: column;
  }

  & .list-useravata {
    font-size: 40px;
    color: #62c273;
  }

  & .list-username {
    margin-left: 5px;
    font-size: 15px;
  }

  & .list-username-time {
    margin-left: 5px;
    font-size: 12px;
  }

  & .list-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 15px;
  }

  & .list-item-imageBox {
    width: 100%;
    height: 50vw;
    /* padding: 5vw 0; */
    overflow: hidden;
  }

  & .list-item-image {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  & .list-item-detail {
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 5vw 0;
    /* width: 48vw; */
  }

  & .buttons {
    padding: 10px 8px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .like-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .detail-content {
    font-size: 1em;
    padding: 2vw 0;
    margin: 0;
    width: 100%;
  }

  & .more-tag {
    text-decoration: none;
    font-weight: 600;
    color: #727272;
  }

  & .more-comment {
    color: black;
    margin-left: 10px;
    height: 25px;
  }

  & .countLikeIt1 {
    font-weight: 600;
    margin-left: 8px;
  }

  & .to-update-button {
    padding: 50px;
  }

  & .ingredient-title {
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    margin: 2vw 0;
  }

  & .ingredient-box {
    display: flex;
    justify-content: space-between;
    margin: 2vw 2vw;
    border-bottom: 1px dotted #9b9b9b;
  }

  & .btn-icon {
    font-size: 25px;
  }

  & .comment-list-header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    background-color: #fcfcfc;
  }

  & .comment-list-header-clicked {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #4477b5;
  }

  & .comment-list-header-clicked-1 {
    height: 45px;
    display: flex;
  }

  & .comment-list-header-arrow {
    font-size: 45px;
  }

  & .comment-list-header-arrow-click {
    font-size: 45px;
    color: #ffffff;
  }

  & .comment-list-header-delete-click {
    font-size: 45px;
    color: #ffffff;
  }

  & .comment-list-header-title {
    margin-left: 15px;
    font-size: 30px;
  }

  & .comment-list-header-title-click {
    color: #ffffff;
    margin-left: 15px;
    font-size: 30px;
  }

  & .comment-list-box {
    /* margin: 10px 5px; */
    margin-top: 65px;
    margin-bottom: 70px;
  }

  & .comment-single {
    margin: 11px 0;
    display: flex;
    justify-content: space-between;
  }

  & .comment-single-left {
    width: 100%;
    /* margin: auto; */
    /* display: flex; */
  }

  & .comment-single-left-1 {
    /* width: auto; */
    /* display: inline; */
  }

  & .comment-single-left-2 {
    /* width: auto; */
    height: 13px;
  }

  & .comment-avata {
    font-size: 40px;
  }

  & .comment-username {
    display: flex;
    font-weight: 900;
    margin-left: 3.3px;
  }

  & .comment-content {
    font-weight: 400;
    font-size: 14px;
    margin-left: 3.3px;
  }

  & .comment-likeIt {
    margin: auto;
  }

  & .comment-createdTime {
    font-size: 10px;
    margin-left: 5.5px;
    margin-right: 20px;
    float: left;
  }

  & .comment-likeIt-count {
    font-size: 1vh;
  }
`;

export default Wrapper;
