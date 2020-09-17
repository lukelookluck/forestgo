import React from "react";
import Header from "./Header/";
import NavigationTab from "./NavigationTab/";
import NavigationMenu from "../components/Community/NavigationMenu/";
import { Grid } from "@material-ui/core";

const Layout = (props) => {
  const { children } = props;

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <Header></Header>
        <div>
          <NavigationTab></NavigationTab>
          {/* <NavigationMenu></NavigationMenu> */}
          {children}
        </div>
      </Grid>
    </Grid>
  );
};

export default Layout;
