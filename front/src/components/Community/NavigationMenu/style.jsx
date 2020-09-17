import styled from "styled-components";

const Wrapper = styled.div`
  & .nav-box {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100vw;
    display: flex;
  }

  & .nav-item {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    border: none;
  }
`;

export default Wrapper;
