import React from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

import ArticleList from "../../components/Community/Article/ArticleList";

const Discovery = () => {
  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <ArticleList />
      </Grid>
    </Wrapper>
  );
};

export default Discovery;
