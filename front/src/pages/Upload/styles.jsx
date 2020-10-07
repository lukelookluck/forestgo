import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  font-family: "NanumSquareRound";

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
    width: 160px;
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

  & .savePic {
    margin-top: 30px;
    height: 50px;
    width: 160px;
    background-color: #509c82;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 20px;
    font-family: "NanumSquareRound";
  }

  & .savePic:hover {
    background-color: #509c82;
  }

  & .ann {
    font-size: 30px;
    font-family: "Recipekorea";
    margin-bottom: 20px;
    margin-top: 20px;
  }

  & .ann2 {
    font-size: 20px;
    font-family: "Recipekorea";
  }

  & .ann3 {
    font-size: 30px;
    font-family: "Recipekorea";
    margin-bottom: 20px;
    margin-top: 50px;
  }

  & .data {
    font-size: 25px;
    font-weight: bold;
  }

  & .add {
    font-size: 25px;
    float: left;
  }

  

`;

export default Wrapper;
