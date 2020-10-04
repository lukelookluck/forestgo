import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  .root {
    /* position: relative; */

    padding-bottom: 50px;
    /* height: 700px; */
  }

  & .uploadForm {
    position: absolute;
    top: 550px;
    width: 100%;
  }

  & .createAritlce-box {
  }

  & .submitBtn-box {
    position: absolute;
    top: 830px;
    left: 50%;
    transform: translate(-50%);
  }

  & .submitBtn {
    margin-top: 30px;
    height: 50px;
    width: 150px;
    background-color: #509c82;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 20px;
    font-family: "NanumSquareRound";
  }

  & .submitBtn:hover {
    background-color: #509c82;
  }
`;

export default Wrapper;
