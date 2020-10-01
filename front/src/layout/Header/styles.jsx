import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  & .logoGrid {
    height: 100px;
    width: 63%;
    background-color: #509c82;
    color: white;
  }

  & .imgGrid {
    background-color: #509c82;
    height: 100px;
    width: 37%;
  }

  & #imglogo {
    width: 60px;
    margin-top: 20px;
    padding-left: 50px;
  }

  & #logo {
    margin-top: 20px;
    font-size: 60px;
    margin-right: 75px;
  }
`;

export default Wrapper;
