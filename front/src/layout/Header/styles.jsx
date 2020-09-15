import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    & .logoGrid {
        height: 100px;
        background-color: rgb(56, 97, 149);
        color: white;
    }

    & #logo {
        margin-top: 30px;
        font-size: 30px;
    }
`;

export default Wrapper;