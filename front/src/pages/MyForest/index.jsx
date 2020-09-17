import React from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import SeasonChart from "./seasonchart";

const MyForest = () => {
  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">등급</Grid>
            <img src="/images/bronze.png" classNmae="medal" width="100px"></img>
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
