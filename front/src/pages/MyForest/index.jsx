import React from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import SeasonChart from "./seasonchart";

const MyForest = () => {

  let history = useHistory();

  const onClickRedirectPathHandler = (name) => (e) => {

    // 로그아웃하는 코드 삽입
    


    alert("로그아웃 되었습니다.");
    window.scrollTo(0, 0);
    history.push(name);
  };

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid container>
          <Grid item xs={9} className="nick">닉네임 님</Grid>
          <Grid item xs={3} className="logout">
            <div onClick={onClickRedirectPathHandler("/")}>로그아웃</div>
          </Grid>
        </Grid>

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">등급</Grid>
            <img src="/images/bronze.png" className="medal" width="100px"></img>
            <Grid className="medal">브론즈</Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">발견한 식물 수</Grid>
            <Grid className="count">9 개</Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">서식지</Grid>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6} className="habi">육상 : 7개</Grid>
              <Grid item xs={6} className="habi">수상 : 2개</Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid" id="lastgrid">
          <Paper variant="outlined">
            <Grid className="title">계절</Grid>
            <Grid item xs={12} className="chart">
              <SeasonChart className="chart"></SeasonChart>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </Wrapper>
  );
};

export default MyForest;
