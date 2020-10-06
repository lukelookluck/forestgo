import React from "react";

import Wrapper from "./style";
import { Grid } from "@material-ui/core";

import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import FaceIcon from "@material-ui/icons/Face";

export default function (props) {
  let a = null;
  if (props.commentInput.content) {
    a = (
      <span
        className="comment-form-register2"
        onClick={() => props.handleSubmit(props.commentInput)}
      >
        등록
      </span>
    );
  } else {
    a = (
      <span
        className="comment-form-register"
        onClick={() => props.handleSubmit(props.commentInput)}
      >
        등록
      </span>
    );
  }

  return (
    <Wrapper>
      <div className="comment-form-footer">
        <Grid container>
          <Grid item xs={1} className="comment-form-avata-box">
            {props.commentInput.content ? (
              <FaceIcon className="comment-form-avata2" />
            ) : (
              <FaceOutlinedIcon className="comment-form-avata" />
            )}
          </Grid>
          <Grid item xs={10}>
            <input
              className="comment-form-input"
              type="text"
              name="comment-content"
              placeholder="댓글 달기..."
              value={props.commentInput.content}
              onChange={({ target: { value } }) =>
                props.setCommentInput({ ...props.commentInput, content: value })
              }
            />
          </Grid>
          <Grid item xs={1} className="comment-form-register-box">
            {a}
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  );
}
