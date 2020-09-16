import React from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";


const MyForest = () => {

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="level">등급</Grid>
        <Grid item xs={12}>
          <div>등급에 맞는 이미지</div>
        </Grid>
        <Grid item xs={12} className="level">발견한 식물 수</Grid>
        <Grid item xs={12}>
          <div>N 개</div>
        </Grid>
        <Grid item xs={12} className="level">서식지</Grid>
        <Grid item xs={12}>
          <div>육상 : N 개</div>
          <div>수상 : N 개</div>
        </Grid>
        <Grid item xs={12} className="level">계절</Grid>
        <Grid item xs={12}>
          <div>봄 : N 개</div>
          <div>여름 : N 개</div>
          <div>가을 : N 개</div>
          <div>겨울 : N 개</div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default MyForest;
