import styled from "styled-components";

const Wrapper = styled.div`
  & .nav-box {
    height: 2em;
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
