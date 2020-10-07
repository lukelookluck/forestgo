import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  .root {
    /* position: relative; */

    padding: 16px;
    /* height: 700px; */
  }

  & .uploadForm {
    /* position: absolute; */
    /* top: 550px; */
    /* width: 100%; */
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
    display: flex;
    justify-content: space-around;
  }

  & .input-image-box {
    margin: 30px 0;
    width: 100%;
    height: 100%;
  }

  & .input-image {
    width: 80vw;
    height: 40vh;
    border-radius: 25px;
  }
`;

export default Wrapper;
