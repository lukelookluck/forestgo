import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Header/";
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";

const useStyles = makeStyles({
  signupText: {
    fontFamily: "NanumSquareRound",
    fontSize: "30px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  let history = useHistory();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onconfirmPasswordHandler = (event) => {
    setconfirmPassword(event.currentTarget.value)
  }

  const hasError = passwordEntered =>
    Password.length < 5 ? true : false;

  const hasNotSameError = passwordEntered =>
    Password != confirmPassword ? true : false;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Password !== confirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }

    // axios 보내는 코드 삽입하기

    alert('회원가입이 완료되었습니다!');
    history.push('/Main');

  }

  const onResetHandler = (event) => {
    event.preventDefault();
    setEmail("");
    setName("");
    setPassword("");
    setconfirmPassword("");
  }

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
                error={hasError('password')}
                id="password"
                label="비밀번호(5글자 이상 필수)"
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
                error={hasNotSameError('confirmPassword')}
                helperText={
                  hasNotSameError('confirmPassword') ? "입력한 비밀번호와 일치하지 않습니다." : null
                }
              ></TextField>
            </div>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <Button type="submit" variant="contained" className="submitBtn" onClick={onSubmitHandler}>
                  등록
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button type="reset" variant="contained" className="resetBtn" onClick={onResetHandler}>
                  다시 입력
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