import styled from "styled-components";

const Wrapper = styled.div`
  & .replys-box {
    /* padding: 5.5px 0 ;
    padding-left: 47px; */
    : 
  }

  /* & .reply-single {
    margin-top: 1%;
  }

  & .reply-username {
    margin: 0 2%;
    font-weight: 600;
  } */

  & .more-reply {
    margin-left: 10px;
    text-decoration: none;
    font-weight: 400;
    color: #727272;
    font-size: 13px;
    /* border-inline: solid 1px black; */
  }

  & .reply-single {
    /* margin: 11px 0; */
    padding: 10px 0 ;
    padding-left: 47px;
    padding-right: 5px;
    display: flex;
    justify-content: space-between;
  }

  & .reply-single-left {
    width: 100%;
    /* display: flex; */
  }

  & .reply-single-left-2 {
    /* width: auto; */
    height: 13px;
  }

  & .reply-avata {
    font-size: 35px;
  }

  & .reply-username {
    display: flex;
    font-weight: 900;
    margin-left: 3.3px;
    /* float: left; */
  }

  & .reply-content {
    font-weight: 400;
    font-size: 14px;
    margin-left: 3.3px;

    /* width: auto; */
  }

  & .reply-likeIt {
    margin: auto;
  }

  & .reply-createdTime {
    font-size: 10px;
    margin-left: 5.5px;
    margin-right: 20px;
    float: left;
  }

  & .reply-likeIt-count {
    font-size: 10px;
  }
`;

export default Wrapper;
