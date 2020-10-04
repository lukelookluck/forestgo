import React, { Fragment, useContext , useEffect, useState, Component } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import SeasonChart from "./seasonchart";
import Axios from "axios";
import { CommonContext } from "../../context/CommonContext";

const MyForest = () => {

  let history = useHistory();
  
  const [flowerList, setFlowerList] = useState([]);
  const { serverUrl, user } = useContext(CommonContext);
  const [spring, setSpring] = useState(0);
  const [summer, setSummer] = useState(0);
  const [fall, setFall] = useState(0);
  const [winter, setWinter] = useState(0);
  const [flag, setFlag] = useState(0);

  let season = ""; 

  let sprcnt = 0;
  let sumcnt = 0;
  let falcnt = 0;
  let wincnt = 0;
  let flacnt = 0;

  useEffect(() => {
    refreshList();
    if(flowerList.length === 0) {
      console.log("i don't know")
    }
  }, []);

  useEffect(() => {
    for(let i = 0; i < flowerList.length; i++){
      Axios.get(`${serverUrl}/api/forestbook/detail/${flowerList[i].forestbook_id}`, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
        .then((response) => {
          season = response.data.season;
          console.log(season);

          if(season.indexOf('3') >= 0 || season.indexOf('4') >= 0 || season.indexOf('5') >= 0){
            sprcnt++;
            setSpring(sprcnt);
          }
          if(season.indexOf('6') >= 0 || season.indexOf('7') >= 0 || season.indexOf('8') >= 0){
            sumcnt++;
            setSummer(sumcnt);
          }
          if(season.indexOf('9') >= 0 || season.indexOf('10') >= 0 || season.indexOf('11') >= 0){
            falcnt++;
            setFall(falcnt);
          }
          if(season.indexOf('12') >= 0 || (season.indexOf('10') < 0 && season.indexOf('11') <= 0 && season.indexOf('1') >= 0) || season.indexOf('2') >= 0){
            wincnt++;
            setWinter(wincnt);
          }
          flacnt++;
          setFlag(flacnt);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

  const handlelogout = () => {
    // 로그아웃
    const url = `${serverUrl}/api/rest-auth/logout/`;
    const headers = {
      "Content-Type": "application/json",
    };
    Axios.post(url, headers)
      .then(() => {
        alert("로그아웃 되었습니다.");
        window.scrollTo(0, 0);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid container>
          <Grid item xs={9} className="nick"></Grid>
          <Grid item xs={3} className="logout">
            <div onClick={handlelogout}>로그아웃</div>
          </Grid>
        </Grid>

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">{user.user.username}님의 등급은</Grid>
            <img src={flowerList.length < 10 ? "/images/bronze.png" 
            : flowerList.length < 20 ? "/images/silver.png"
            : "/images/gold.png"} className="medal" width="100px"></img>

            <Grid className="medal">{flowerList.length < 10 ? "브론즈" 
            : flowerList.length < 20 ? "실버"
            : "골드"}</Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">{user.user.username}님의 식물은 총</Grid>
            <Grid className="count">{flowerList.length} 개</Grid>
          </Paper>
        </Grid>
        

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">{user.user.username}님의 식물을 볼 수 있는 계절은</Grid>
            <Grid item xs={12} className="chart">
              { flag === flowerList.length
              ? <Fragment>
                  <SeasonChart
                    SeasonCnt={[spring, summer, fall, winter]}
                    ></SeasonChart>
                  <Grid item xs={12}>더운 여름을 잘 이겨내는 사람이군요! 같은 가장 많이 모은 계절에 맞는 멘트 넣기</Grid>
              </Fragment>
              : <Fragment></Fragment>}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid" id="lastgrid">
          <Paper variant="outlined">
            <Grid className="title">{user.user.username}님의 꽃말은</Grid>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} className="habi">가장 많이 모은 꽃말? 단어? 보여주기</Grid>
              <Grid item xs={12} className="habi">좀 시각적으로 예쁘게</Grid>
            </Grid>
          </Paper>
        </Grid>


      </Grid>
    </Wrapper>
  );
};

export default MyForest;
