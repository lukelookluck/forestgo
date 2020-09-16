import styled from "styled-components";

const Wrapper = styled.div`
  & .go-articleForm-button {
    position: fixed;
    /* right: 50%; */
    right: 5vw;
    /* transform: translateX(-50%); */
    /* top: 0; */
    bottom: 5vw;

    border: 0;
    border-radius: 30px;
    padding: 12.5px;
    background-color: #3d69a0;

    font-size: 0.9rem;
  }

  & .acticleBtn {
    color: white;
    font-size: 30px;
  }

  & .create-button:hover {
    background: rgb(56, 97, 182);

    color: white;
  }
`;

export default Wrapper;
