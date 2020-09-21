import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  & .form-header-title {
    margin-top: 35px;
    font-size: 30px;
    height: 60px;
    font-family: 'NanumSquareRound';
  }

  & #details {
    // height: 200px;
  }

  & form div {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  & .form-row .col input::placeholder {
    color: #a1a1a1;
    font-weight: 500;
  }

  & .article-create-button {

    margin-top: 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 120px;
    background-color: rgb(76, 127, 188);
    text-decoration: none;
    border: none;
    color: white;
    font-size: 20px;
    font-family: 'NanumSquareRound';

    // border: none;
    // border-radius: 25px;
    // padding: 7px 10px;
    // background-color: rgb(56, 97, 182);
    // height: 35px;
    // font-size: 15px;
    // color: white;
  }

  & .article-create-button:hover {
    background-color: rgb(76, 127, 188);
  }

  & .resetBtn {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 120px;
    background-color: rgb(242, 242, 242);
    text-decoration: none;
    border: none;
    color: black;
    font-size: 20px;
    font-family: 'NanumSquareRound';
  }

`;

export default Wrapper;
