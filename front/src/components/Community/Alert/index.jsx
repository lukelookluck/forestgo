import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import LocalBarOutlinedIcon from "@material-ui/icons/LocalBarOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function TransitionAlerts(props) {
  const classes = useStyles();
  // const [open, setOpen] = useState(true);

  // console.log("asdnkjasd", open);

  return (
    <div className={classes.root}>
      <Collapse in={props.open}>
        <Alert
          severity="info"
          icon={<LocalBarOutlinedIcon fontSize="small" />}
          action={
            <IconButton
              aria-label="close"
              color="primary"
              size="small"
              onClick={() => {
                // open = false;
                // setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          MYBAR에 저장되었습니다.
        </Alert>
      </Collapse>
    </div>
  );
}
