import React, { useState, useContext, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "./styles";
import { Grid, Button, TextField, Paper } from "@material-ui/core";
import "../../index.css";
import { CommonContext } from "../../context/CommonContext";
import Axios from "axios";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const MyPic = () => {
  const [flowerList, setFlowerList] = useState([]);
  const [List, setList] = useState([]);
  const { serverUrl, user } = useContext(CommonContext);

  let history = useHistory();

  let detailList = []

  const onClickRedirectPathHandler = (name) => (e) => {
    window.scrollTo(0, 0);
    history.push(name);
  };

  const showDetail = (id) => {
    for(let i = 0; i < List.length; i++){
      if(List[i].id === id){
        return (
          <Grid>
            <Grid className="textTop">
              <Grid container>
                <Grid className="engLabel">영명</Grid>
                <Grid className="engName">{List[i].eng_name}</Grid>
              </Grid>
              <Grid container>
                <Grid className="syLabel">꽃말</Grid>
                <Grid className="sym">{List[i].sympolism}</Grid>
              </Grid>
              <Grid container>
                <Grid className="seaLabel">개화</Grid>
                <Grid className="sea">{List[i].season}</Grid>
              </Grid>
            </Grid>
            <hr width="340px"></hr>
            <Grid className="textTop">
              <Grid className="desLabel">설명</Grid>
              <Grid className="des">{List[i].description}</Grid>
            </Grid>
            <hr width="340px"></hr>
            <Grid className="textTop">
              <Grid className="desLabel">사용</Grid>
              <Grid className="des">{List[i].use}</Grid>
            </Grid>
            <hr width="340px"></hr>
            <Grid className="textTop">
              <Grid className="desLabel">키우는 법</Grid>
              <Grid className="des">{List[i].growth}</Grid>
            </Grid>
          </Grid>
        );
      }
    }
  };

  useEffect(() => {
    refreshList();
  }, []);

  useEffect(() => {
    refreshDetailList();
  }, [flowerList]);

  function refreshList() {
    Axios.get(`${serverUrl}/api/forestbook/my_forest/`, {
      headers: {
        Authorization: `JWT ${user.token}`,
      },
      params: {
        userinfo_id: user.user.id,
      },
    })
      .then((response) => {
        console.log(response.data);
        setFlowerList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function refreshDetailList() {
    console.log("들어왔어");
    for (let i = 0; i < flowerList.length; i++) {
      Axios.get(
        `${serverUrl}/api/forestbook/detail/${flowerList[i].forestbook_id}`,
        {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
        }
      )
        .then((response) => {
          detailList = detailList.concat([response.data]);
          setList(detailList);
        })
        .catch((error) => {
          console.log("저기?");
          console.log(error);
        });
    }
  }

  return (
    <Wrapper>
      <Grid container>
        <Grid className="header">
          <ArrowBackRoundedIcon
            className="back"
            fontSize="large"
            onClick={onClickRedirectPathHandler("/Main")}
          ></ArrowBackRoundedIcon>
          <div className="header-title">내가 수집한 식물</div>
        </Grid>
      </Grid>
      <div className="empty"></div>
      <Grid container justify="center" alignItems="center">
        {flowerList.length === 0 ? (
          <Fragment></Fragment>
        ) : (
          flowerList.sort((a, b) => b.id - a.id).map((pic, index) => (
            <Grid key={index} item xs={12}>
              <Paper className="paper">
                <Grid>
                  <Grid className="imgGrid">
                    <img src={pic.img} width="270px" height="270px"></img>
                  </Grid>
                  <hr width="340px"></hr>
                  <Grid>
                    <Grid className="textArea">
                      <Grid className="name">
                        {pic.flowername}
                      </Grid>
                      <Grid className="date">
                        {pic.created_at.substring(0,10)} 수집
                      </Grid>
                    </Grid>
                    <hr width="340px"></hr>
                    {List.length > 0 ? showDetail(pic.forestbook_id) : <Fragment></Fragment>}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
      {console.log(detailList)}
    </Wrapper>
  );
};

export default MyPic;
