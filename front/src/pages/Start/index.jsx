import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Wrapper from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";
import Axios from "axios";
import { CommonContext } from "../../context/CommonContext";

const useStyles = makeStyles({
  logotext: {
    fontFamily: "BBTreeTB",
  },
});

const Start = () => {
  let history = useHistory();

  const { serverUrl, setUser } = useContext(CommonContext);

  const onClickRedirectPathHandler = (name) => (e) => {
    window.scrollTo(0, 0);
    history.push(name);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const url = `${serverUrl}/api/accounts/login/`;
    const data = {
      username: email,
      password: password,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    Axios.post(url, data, headers)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setUser({ ...response.data });
        history.push("/Main");
      })
      .catch((error) => {
        console.log(error);
        alert("이메일, 비밀번호를 확인해주세요");
        setEmail("");
        setPassword("");
      });
  };

  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="logoGrid">
          <img src="./images/forest.png" className="forestimg"></img>
          <p className={classes.logotext} id="logo_en">
            ForestGo
          </p>
          <p className={classes.logotext} id="logo_ko">
            포레스트고
          </p>
        </Grid>
        <Grid item xs={10} className="login">
          <div>
            <input
              id="email"
              type="text"
              name="email"
              placeholder=" 이메일"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            ></input>
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder=" 비밀번호"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            ></input>
          </div>
          <Button
            variant="contained"
            className="login_btn"
            onClick={handleLogin}
          >
            로그인
          </Button>
        </Grid>
        <Grid item xs={12} className="bottom">
          <div id="signup" onClick={onClickRedirectPathHandler("/SignUp")}>
            회원가입
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Start;
