import React from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Discovery from "../../pages/Discovery/";
import MyForest from "../../pages/MyForest/";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const styles = (theme) => ({
    label: {
      color: "#FFF000",
    },
    indicator: {
      backgroundColor: "#FFF",
    },
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  label: {
    color: "#62c273",
  },
}));

export default function NavigationTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Wrapper className={classes.root}>
      {/* <Grid container justify="center" alignItems="center"> */}
      <AppBar className="myAppbar" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          // textColor="primary"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#62c273",
              height: "3px",
            },
          }}
          variant="fullWidth"
          className="navTabs"
        >
          <Tab className={classes.label} label="Discovery" {...a11yProps(0)} />
          <Tab className={classes.label} label="MyForest" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Discovery></Discovery>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MyForest></MyForest>
        </TabPanel>
      </SwipeableViews>
      {value == 0}
      {/* </Grid> */}
    </Wrapper>
  );
}
