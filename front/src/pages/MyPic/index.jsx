import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Header/";
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";
import { CommonContext } from "../../context/CommonContext";
import Axios from "axios";


const MyPic = () => {
  
  return (
    <Wrapper>
      <Header></Header>
      <Grid container className="root" justify="center" alignItems="center">
        
      </Grid>
    </Wrapper>
  );
};

export default MyPic;
