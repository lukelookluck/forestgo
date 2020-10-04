import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Wrapper from "./style";

const useStyles = makeStyles((theme) => ({}));

export default function SingleLineGridList(props) {
  const classes = useStyles();
  return (
    <Wrapper>
      <div className={classes.root}>
        {props.temp.map((tile, idx) => (
          <div className="input-image-box" key={tile.id}>
            <img className="input-image" src={tile.value} alt={tile.title} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
