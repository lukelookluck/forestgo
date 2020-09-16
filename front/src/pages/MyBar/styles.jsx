import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0 20px;
  text-align: center;
  box-sizing: border-box;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  font-family: "IBMPlexSansKR-Text";

  * {
    word-break: keep-all;
  }
  & .recipe {
    padding: 10%;
  }

  & .listdiv {
    // float: left;
    display: inline-block;
    width: 50%;
  }

  & .deletebtn {
    float: right;
  }

  & .namediv {
    position: relative;
  }

  & .iconbtndiv {
    position: relative;
    left: 10px;
    top: -38px;
  }

  & .sug {
    font-size: 30px;
    margin-top: 50px;
  }

  & .card-imageBox {
    width: 63.75vw;
    height: 63.75vw;
    padding: 5% 0%;
    overflow: hidden;
    /* padding-bottom: 10%; */
    border-bottom: solid 1px #9b9b9b;
  }

  & .card-image {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  @media (min-width: 700px) {
    & .card {
      width: 1000px;
    }

    & .card-img-top {
      // width: 600px;
      // height: 500px;
    }
  }
`;

export default Wrapper;
