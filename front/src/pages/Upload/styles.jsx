import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  .root {
    margin-bottom: 50px;
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
    font-family: "IBMPlexSansKR-Text";
  }

  & .submitBtn:hover {
    background-color: #509c82;
  }
  
`;

export default Wrapper;
