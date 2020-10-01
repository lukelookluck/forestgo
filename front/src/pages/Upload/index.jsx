import React from "react";
import Wrapper from "./styles";
import { Grid, Button } from "@material-ui/core";
import Header from "../../layout/Header/";
import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import Temp1 from "../../components/Community/ArticleForm/Temp1";

const Upload = () => {
  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12}>
          <ImageUploadBtn />
        </Grid>
        <Grid item xs={12}>
          <p>식물 이름 : OOO</p>
          <p>식물 정보 : OOO</p>
          <p>식물 정보 : OOO</p>
          <p>식물 정보 : OOO</p>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" className="submitBtn">
            등록
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Upload;
