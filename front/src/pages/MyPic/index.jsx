import React, { useState, useContext, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../layout/Header/";
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../index.css";
import { CommonContext } from "../../context/CommonContext";
import Axios from "axios";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const MyPic = () => {

  const [flowerList, setFlowerList] = useState([]);
  const [detailList, setDetailList] = useState([]);
  const { serverUrl, user } = useContext(CommonContext);

  let history = useHistory();

  const onClickRedirectPathHandler = (name) => (e) => {
    window.scrollTo(0, 0);
    history.push(name);
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
        userinfo_id : user.user.id
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
    for(let i = 0; i < flowerList.length; i++){
      Axios.get(`${serverUrl}/api/forestbook/detail/${flowerList[i].forestbook_id}`, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
        .then((response) => {
          console.log("여기?");
          console.log(response.data);
          // const list = [...detailList, response.data];
          // setDetailList(detailList.concat(response.data));
          setDetailList([...detailList, response.data])
        })
        .catch((error) => {
          console.log("저기?");
          console.log(error);
        });
    }
  }
  
  return (
    <Wrapper>
      <Header></Header>
      <Grid container>
        <Grid>
          <ArrowBackRoundedIcon className="back" onClick={onClickRedirectPathHandler("/Main")}></ArrowBackRoundedIcon>
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center">
        {
          flowerList.length === 0
          ? <Fragment></Fragment>
          : flowerList.map((pic, index) => (
            <Grid key={index} item xs={12}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={pic.img}
                    className="cardImg"
                  />
                  <CardContent>
                    <Grid>
                      {pic.flowername}
                    </Grid>
                    <Grid>
                      {pic.created_at.substring(0,10)}
                    </Grid>
                    {console.log(detailList.length)}
                    {
                      detailList
                      ? <Fragment>꺄울</Fragment>
                      : <Grid>
                          {console.log(detailList.eng_name)}
                          {detailList.eng_name}
                        </Grid>
                    }
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      {console.log(detailList)}
    </Wrapper>
  );
};

export default MyPic;
