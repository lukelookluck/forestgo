import styled from "styled-components";

const Wrapper = styled.div`
  & .comments-box {
    margin-top: 4px;
  }

  & .comment-single {
    margin-top: 4px;
  }

  & .comment-username {
    margin: 0 8px;
    font-weight: 600;
  }

  & .more-comment {
    margin-left: 8px;
    text-decoration: none;
    font-weight: 600;
    color: #727272;
  }
`;

export default Wrapper;
