import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  .root {
    position: relative;

    margin-bottom: 50px;
    height: 1120px;
  }

  & .uploadForm {
    position: absolute;
    top: 750px;
    width: 100%;
  }

  & .uploadForm-unit {
    width: 100%;
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

  & .submitBtn-box {
    position: absolute;
    top: 1030px;
    left: 50%;
    transform: translate(-50%);
  }

  & .submitBtn:hover {
    background-color: #509c82;
  }
`;

export default Wrapper;
