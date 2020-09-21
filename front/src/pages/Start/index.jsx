import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Wrapper from "./styles";
import { Login } from "./auth";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";

const useStyles = makeStyles({
  logotext: {
    fontFamily: "Cafe24Ohsquare",
  },
});

const Start = () => {
  let history = useHistory();

  // const { serverUrl, user, setUser } = useContext(CommonContext);

  const onClickRedirectPathHandler = (name) => (e) => {
    window.scrollTo(0, 0);
    history.push(name);
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    Login({ id, pw });
    history.push("/main");

    // const url = `${serverUrl}/accounts/login/`;
    // const data = {
    //   username: id,
    //   password: pw,
    // };
    // const headers = {
    //   "Content-Type": "application/json",
    // };
    // Axios.post(url, data, headers)
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.data);
    //     setUser({ ...response.data });
    //     history.push("/main");
    //     console.log("로그인 됨");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("아이디, 비밀번호를 확인해주세요");
    //     setPw("");
    //   });
  };

  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="logoGrid">
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
              id="id"
              type="text"
              name="id"
              placeholder="이메일"
              value={id}
              onChange={({ target: { value } }) => setId(value)}
            ></input>
          </div>
          <div>
            <input
              id="pw"
              type="password"
              name="pw"
              placeholder="비밀번호"
              value={pw}
              onChange={({ target: { value } }) => setPw(value)}
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
        <Grid item xs={6} className="bottom">
          <div id="signup" onClick={onClickRedirectPathHandler("/SignUp")}>
            회원가입
          </div>
        </Grid>
        <Grid item xs={6} className="bottom">
          <div id="findpw" onClick={onClickRedirectPathHandler("/FindPW")}>
            비밀번호
            <br />
            찾기
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Start;
