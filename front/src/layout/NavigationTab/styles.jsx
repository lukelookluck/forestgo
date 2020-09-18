import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  & .myAppbar {
    position: fixed;
    bottom: 0px;
  }

  & .navTabs {
    background-color: rgb(255, 255, 255);
    color: #1b5e20;
  }

  & .myTab {
    font-size: 20px;
    height: 50px;
  }
  & .myTab:hover {
    text-decoration: none;
  }
`;

export default Wrapper;
