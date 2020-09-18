import React from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    logotext: {
        fontFamily: 'Cafe24Ohsquare'
    }
})

const Header = () => {
  const classes = useStyles()

  return (
    <Wrapper>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className="logoGrid">
          <p className={classes.logotext} id="logo">ForestGo</p>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Header;
