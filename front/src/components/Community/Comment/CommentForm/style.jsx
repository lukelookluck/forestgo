import styled from "styled-components";

const Wrapper = styled.div`
  & .comment-form-footer {
    position: fixed;
    bottom: 0%;
    padding: 1vw 0;
    border-top: solid 0.5px #dddddd;
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
  }

  & .comment-form-avata-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .comment-form-avata {
    font-size: 34.5px;
    color: #3a679e;
  }

  & .comment-form-avata2 {
    font-size: 34.5px;
    color: #3a679e;
  }

  & .comment-form-input {
    border: none;
    width: 100%;
    word-wrap: break-word;
    height: 97.5%;
  }

  & .comment-form-register-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .comment-form-register {
    text-decoration: none;
    font-weight: 600;
    color: #93b1d7;
  }

  & .comment-form-register2 {
    text-decoration: none;
    font-weight: 600;
    color: #4477b5;
  }
`;
export default Wrapper;
