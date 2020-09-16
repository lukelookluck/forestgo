import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Header/";
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";

const useStyles = makeStyles({
  signupText: {
    fontFamily: "IBMPlexSansKR-Text",
    fontSize: "30px",
  },
});

const SignUp = () => {
  const classes = useStyles();
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
                id="id"
                label="아이디"
                variant="outlined"
                autoFocus
              ></TextField>
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="pw"
                label="비밀번호"
                variant="outlined"
                type="password"
              ></TextField>
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="name"
                label="닉네임"
                variant="outlined"
              ></TextField>
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="deviceNum"
                label="기기번호"
                variant="outlined"
              ></TextField>
            </div>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <Button type="submit" variant="contained" className="submitBtn">
                  등록
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button type="reset" variant="contained" className="resetBtn">
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
