import React from "react";
import Wrapper from "./styles";
import { Grid, Button } from "@material-ui/core";
import Header from "../../layout/Header/";

const Upload = () => {
  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12}>
          <h1>촬영한 이미지 띄울 Gid</h1>
        </Grid>
        <Grid item xs={12}>
          <p>식물 이름 : OOO</p>
          <p>식물 정보 : OOO</p>
          <p>식물 정보 : OOO</p>
          <p>식물 정보 : OOO</p>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            등록
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Upload;
