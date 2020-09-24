import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "./style";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  Button: {
    backgroundColor: "white",
    color: "black",
    width: "70vw",
    height: "15vw",
    padding: "0 2vw",
    fontSize: "4vw",
    textAlign: "left",
    float: "left",
    border: "none",
  },
}));

export default function (props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <MoreVertIcon className="moreIcon" onClick={handleOpen}></MoreVertIcon>
      <Modal
        disableEnforceFocus
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        disableAutoFocus
        // closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
              <Link
                to={{
                  pathname: "/Community/Create",
                  state: {
                    article: props.item,
                  },
                }}
              >
                <button className={classes.Button}>수정</button>
              </Link>
            </div>
            <div>
              <button
                className={classes.Button}
                onClick={() => props.DeleteArticle(props.item)}
              >
                삭제
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </Wrapper>
  );
}
