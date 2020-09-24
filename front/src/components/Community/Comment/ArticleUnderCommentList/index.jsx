import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "./style";

import Grid from "@material-ui/core/Grid";

export default function (props) {
  return (
    <Wrapper>
      <Grid className="comments-box">
        {props.comments.length > 0 && (
          <Link
            className="more-comment"
            to={{
              pathname: "/community/comment",
              state: {
                comments: props.comments,
                article: props.article.id,
              },
            }}
          >
            댓글 {props.article.total.length}개 모두 보기
          </Link>
        )}

        {props.comments.map((comment, idx) => {
          if (idx < 2) {
            return (
              <div className="comment-single" key={idx}>
                <span className="comment-username">{comment.username}</span>
                {comment.content}
              </div>
            );
          }
        })}
      </Grid>
    </Wrapper>
  );
}
