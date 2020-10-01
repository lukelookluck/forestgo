import styled from "styled-components";

const Wrapper = styled.div`
  & .comment-form-footer {
    position: fixed;
    bottom: 0%;
    padding: 1.5% 2.5%;
    border-top: solid 0.5px #dddddd;
    width: 100%;
    height: 50px;
    background-color: white;
  }

  & .comment-form-avata {
    font-size: 35px;
    color: #3a679e;
  }

  & .comment-form-avata2 {
    font-size: 35px;
    color: #3a679e;
  }

  & .comment-form-input {
    margin: 0 2.5%;
    border: none;
    width: 77.5%;
    word-wrap: break-word;
    /* height: 100%; */
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
