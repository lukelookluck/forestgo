import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";

export default function () {
  let history = useHistory();

  const onClickRedirectPathHandler = (name) => (e) => {
    window.scrollTo(0, 0);
    history.push(name);
  };

  return (
    <Wrapper>
      <Grid className="nav-box">
        <button
          className="nav-item"
          onClick={onClickRedirectPathHandler("/Discovery")}
        >
          <ChatIcon className="community-icon" />
        </button>
        <button
          className="nav-item"
          onClick={onClickRedirectPathHandler("/MyForest")}
        >
          <PersonOutlineIcon className="my-bar-icon" />
        </button>
        <button className="nav-item">
          <SearchIcon className="search-icon" />
        </button>
      </Grid>
    </Wrapper>
  );
}
