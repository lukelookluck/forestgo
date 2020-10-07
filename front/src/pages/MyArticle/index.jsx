import React from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import "../../index.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

import Community from "../Community/";

const MyArticle = () => {
  let history = useHistory();

  function goBack() {
    history.goBack();
  }
  return (
    <Wrapper>
      <div className="comment-list-header">
        <ArrowBackOutlinedIcon
          className="comment-list-header-arrow"
          fontSize="large"
          onClick={goBack}
        />
        <div className="header-title">내가 쓴 글</div>
      </div>
      <Grid className="root" justify="center" alignItems="center">
        <Community myarticle={true} />
      </Grid>
    </Wrapper>
  );
};

export default MyArticle;
