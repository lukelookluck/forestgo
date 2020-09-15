import styled from "styled-components";

const Wrapper = styled.div`
  .App {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    text-align: center;
  }

  .logo_div {
    height: 300px;
    text-align: center;
    background-color: rgb(183, 199, 253);
  }

  .logo_en {
    font-size: 60px;
    margin-bottom: 5px;
    padding-top: 100px;
  }

  .logo_ko {
    font-size: 20px;
    margin-top: 5px;
  }

  .login {
    margin-top: 60px;
  }

  #id {
    width: 300px;
    height: 30px;
    margin-bottom: 20px;
  }
  #pw {
    width: 300px;
    height: 30px;
  }

  #login_btn {
    margin-top: 60px;
    width: 300px;
    height: 80px;
    background-color: rgb(151, 156, 228);
    text-decoration: none;
    border: none;
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .link_div {
    margin-top: 15px;
    width: 300px;
    text-align: center;
    color: rgb(57, 49, 105);
  }

  #signup {
    float: left;
    width: 100px;
  }

  #findpw {
    float: left;
    width: 150px;
    margin-left: 40px;
  }

  @media (min-width: 1024px) {
    .App {
      margin-left: auto;
      margin-right: auto;
      width: 700px;
      text-align: center;
    }

    .logo_div {
      height: 300px;
      text-align: center;
      background-color: rgb(183, 199, 253);
    }

    .logo_en {
      font-size: 80px;
      margin-bottom: 5px;
      padding-top: 68px;
    }

    .logo_ko {
      font-size: 25px;
      margin-top: 5px;
    }

    .login {
      margin-top: 80px;
    }

    #id {
      width: 700px;
      height: 30px;
      margin-bottom: 20px;
    }
    #pw {
      width: 700px;
      height: 30px;
    }

    #login_btn {
      margin-top: 60px;
      width: 700px;
      height: 80px;
      background-color: rgb(151, 156, 228);
      text-decoration: none;
      border: none;
      color: white;
      font-size: 30px;
      margin-bottom: 20px;
    }

    .link_div {
      margin: auto;
      width: 700px;
      text-align: center;
    }

    #signup {
      float: left;
      width: 200px;
    }

    #findpw {
      float: left;
      width: 280px;
      margin-left: 220px;
    }
  }
`;
