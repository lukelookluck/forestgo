import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  font-family: "NanumSquareRound";

  & .root {
    margin-top: 60px;
  }

  & .header-title {
    margin-left: 20px;
    font-size: 17px;
  }

  & .comment-list-header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    background-color: #fcfcfc;
  }

  & .comment-list-header-arrow {
    font-size: 35px;
    margin-left: 5px;
  }
`;

export default Wrapper;
