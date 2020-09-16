import styled from "styled-components";

const Wrapper = styled.div`
  & .to-update-button {
    padding: 50px;
    size: 100px;
  }

  & .a {
    font-size: 100px;
    background-color: white;
    padding: 100px;
    /* backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5], */
  }

  & .moreIcon {
    font-size: 30px;
  }
`;

export default Wrapper;
