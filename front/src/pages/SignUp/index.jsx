import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Header/";
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";
import { CommonContext } from "../../context/CommonContext";
import Axios from "axios";

const useStyles = makeStyles({
  signupText: {
    fontFamily: "NanumSquareRound",
    fontSize: "30px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  let history = useHistory();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const { serverUrl, setUser } = useContext(CommonContext);

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onconfirmPasswordHandler = (event) => {
    setconfirmPassword(event.currentTarget.value);
  };

  const hasError = (passwordEntered) => (Password.length < 8 ? true : false);

  const hasNotSameError = (passwordEntered) =>
    Password != confirmPassword ? true : false;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    const url = `${serverUrl}/api/rest-auth/registration/`;
    const data = {
      username: Name,
      password1: Password,
      password2: confirmPassword,
      email: Email,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    Axios.post(url, data, headers)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert("회원가입이 완료되었습니다.");

        // 저 로그인을 거쳐야지만 user 정보가 들어와서 일단 이렇게 했음
        handleLogin(data);
      })
      .catch((error) => {
        console.log(error);
        alert("사용할 수 없는 이메일 또는 비밀번호입니다.");
        setEmail("");
        setName("");
        setPassword("");
        setconfirmPassword("");
      });
  };

  const handleLogin = (predata) => {
    const url = `${serverUrl}/api/accounts/login/`;
    const data = {
      username: predata.email,
      password: predata.password1,
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
  const onResetHandler = (event) => {
    event.preventDefault();
    setEmail("");
    setName("");
    setPassword("");
    setconfirmPassword("");
  };

  return (
    <Wrapper>
      <Header></Header>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="signin">
          <div className={classes.signupText}>회원가입</div>
        </Grid>
        <Grid item xs={10} className="info">
          <form>
            <div>
              <TextField
                required
                fullWidth
                value={Email}
                id="email"
                label="이메일"
                onChange={onEmailHandler}
                variant="outlined"
                autoFocus
              ></TextField>
            </div>
            <div>
              <TextField
                required
                fullWidth
                value={Name}
                onChange={onNameHandler}
                id="nickname"
                label="닉네임"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                required
                fullWidth
                value={Password}
                onChange={onPasswordHandler}
                error={hasError("password")}
                id="password"
                label="비밀번호(8글자 이상 필수)"
                variant="outlined"
                type="password"
              ></TextField>
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="confirmPassword"
                label="비밀번호 확인"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={onconfirmPasswordHandler}
                error={hasNotSameError("confirmPassword")}
                helperText={
                  hasNotSameError("confirmPassword")
                    ? "입력한 비밀번호와 일치하지 않습니다."
                    : null
                }
              ></TextField>
            </div>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <Button
                  type="reset"
                  variant="contained"
                  className="resetBtn"
                  onClick={onResetHandler}
                >
                  다시 입력
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  variant="contained"
                  className="submitBtn"
                  onClick={onSubmitHandler}
                >
                  등록
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SignUp;
