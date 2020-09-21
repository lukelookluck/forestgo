import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  & .logoGrid {
    height: 360px;
    background-color: #509c82;
    color: white;
  }

  & #logo_en {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 80px;
  }
  & #logo_ko {
    margin-top: 0;
    font-size: 40px;
  }

  & .login {
    margin-top: 70px;
  }

  & #id {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
  }

  & #pw {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
  }

  & .login_btn {
    margin-top: 30px;
    width: 100%;
    height: 50px;
    background-color: #509c82;
    text-decoration: none;
    border: none;
    color: white;
    font-family: "IBMPlexSansKR-Text";
    font-size: 20px;
    margin-bottom: 30px;
  }

  & .login_btn:hover {
    background-color: #509c82;
  }

  & .bottom {
    color: #509c82;
    font-family: "IBMPlexSansKR-Text";
  }

  & .forestimg {
    width: 150px;
    height: 150px;
    margin-top: 40px;
    margin-bottom: 0;
    padding-bottom: 0;
  }

`;

export default Wrapper;
