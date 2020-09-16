import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  & .signin {
    height: 150px;
  }

  & .info {
  }

  & .signin div {
    margin-top: 65px;
    // font-size: 40px;
  }

  & form div {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  & .submitBtn {
    margin-top: 30px;
    height: 50px;
    width: 120px;
    background-color: #62c273;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 20px;
    font-family: "IBMPlexSansKR-Text";
  }

  & .submitBtn:hover {
    background-color: #62c273;
  }

  & .resetBtn {
    margin-top: 30px;
    height: 50px;
    width: 120px;
    background-color: rgb(242, 242, 242);
    text-decoration: none;
    border: none;
    color: black;
    font-size: 20px;
    font-family: "IBMPlexSansKR-Text";
  }

  @media (min-width: 700px) {
    & form {
      margin: 0 auto;
      width: 50%;
    }
  }
`;

export default Wrapper;
