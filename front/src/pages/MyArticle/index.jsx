import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Header/";
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";
import { CommonContext } from "../../context/CommonContext";
import Axios from "axios";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

import Community from "../Community/";

const MyArticle = () => {
  let history = useHistory();

  function goBack() {
    history.goBack();
  }
  return (
    <Wrapper>
      {/* <Header></Header> */}
      <div className="comment-list-header">
        <ArrowBackOutlinedIcon
          className="comment-list-header-arrow"
          fontSize="large"
          onClick={goBack}
        />
        {/* <span className="comment-list-header-title">댓글</span> */}
        <div className="header-title">내가 쓴 글</div>
      </div>
      <Grid className="root" justify="center" alignItems="center">
        <Community myarticle={true} />
      </Grid>
    </Wrapper>
  );
};

export default MyArticle;
