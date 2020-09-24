import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;

    & .findpw {
        height: 150px;
    }

    & .findpw div {
        margin-top: 60px;
        font-size: 30px;
        font-family: 'IBMPlexSansKR-Text';
    }

    & form div {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    & .submitBtn {
        margin-top: 30px;
        height: 50px;
        width: 180px;
        background-color: #509c82;
        text-decoration: none;
        border: none;
        color: white;
        font-size: 20px;
    }

    & .submitBtn:hover {
        background-color: #509c82;
    }

    @media(min-width: 700px) {
        & form {
            margin: 0 auto; 
            width: 50%;
        }

    }

`;

export default Wrapper;