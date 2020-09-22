import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "NanumSquareRound";

  & .list-card {
    margin-top: 2.5vw;
    margin-bottom: 10vw;
    width: 92.3vw;
    text-align: left;
  }

  & .list-user {
    display: flex;
    justify-content: space-between;
    padding-left: 2%;
    margin: 0;
    padding-bottom: 5px;
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
    flex-direction: row;
    justify-content: space-between;
    margin: 0 15px;
  }

  & .list-item-imageBox {
    width: 35.5vw;
    height: 27vw;
    padding: 5vw 0;
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
    width: 48vw;
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
`;

export default Wrapper;
