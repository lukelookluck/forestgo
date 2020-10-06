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
  const [articleList, setArticleList] = useState([]);

  let season = ""; 

  let sprcnt = 0;
  let sumcnt = 0;
  let falcnt = 0;
  let wincnt = 0;
  let flacnt = 0;

  const onClickRedirectPathHandler = (name) => (e) => {
    window.scrollTo(0, 0);
    history.push(name);
  };


  useEffect(() => {
    refreshList();
    refreshArticleList();
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

  function refreshArticleList() {
    Axios.get(`${serverUrl}/community/my_article/`, {
      headers: {
        Authorization: `JWT ${user.token}`,
      },
      params: {
        user : user.user.id
      },
    })
      .then((response) => {
        console.log(user.user.id);
        console.log(response.data);
        setArticleList(response.data);
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
            {flowerList.length === 0
            ? <Grid item xs={12} className="not">아직 수집한 식물이 없어요.<br></br>식물을 촬영해보세요!</Grid>
            : <Grid item xs={12} className="chart">
              { flag === flowerList.length
              ? <Fragment>
                  <SeasonChart
                    SeasonCnt={[spring, summer, fall, winter]}
                    ></SeasonChart>
              </Fragment>
              : <Fragment></Fragment>}
            </Grid>
            }
          </Paper>
        </Grid>

        {/* <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">{user.user.username}님의 꽃말은</Grid>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} className="habi">가장 많이 모은 꽃말? 단어? 보여주기</Grid>
              <Grid item xs={12} className="habi">좀 시각적으로 예쁘게</Grid>
            </Grid>
          </Paper>
        </Grid> */}

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid container>
              <Grid className="title_p">{user.user.username}님이 수집한 식물</Grid>
              {flowerList.length === 0
              ? <Fragment></Fragment>
              : <Grid className="seepic">
                  <div onClick={onClickRedirectPathHandler("/MyPic")}>+ 더보기</div>
                </Grid>
              }
            </Grid>
            <Grid container justify="center" alignItems="center" className="picGrid">
              { flowerList.length <= 0
              ? <Fragment>식물을 촬영해보세요!</Fragment> 
              : flowerList.length <= 3
              ? <Grid container justify="center" alignItems="center">
                  {flowerList.map((pic, index) => (
                      <Grid item key={index} xs={12 / flowerList.length}>
                        <img src={pic.img} width="60px" height="60px"></img>
                      </Grid>
                  ))}
                </Grid>
              : <Grid container justify="center" alignItems="center">
                  <Grid item xs={4}>
                    <img src={flowerList[flowerList.length - 1].img} width="60px" height="60px"></img>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={flowerList[flowerList.length - 2].img} width="60px" height="60px"></img>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={flowerList[flowerList.length - 3].img} width="60px" height="60px"></img>
                  </Grid>
                </Grid>
              }
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid" id="lastgrid">
          <Paper variant="outlined">
            <Grid container>
              <Grid className="title_p">{user.user.username}님이 쓴 글</Grid>
              {articleList.length === 0
              ? <Fragment></Fragment>
              : <Grid>
                  <div className="seearti" onClick={onClickRedirectPathHandler("/MyArticle")}>+ 더보기</div>
                </Grid> 
              }
            </Grid>
            <Grid container justify="center" alignItems="center">
            { articleList.length <= 0
              ? <Grid item xs={12} className="nott">게시글을 작성해보세요!</Grid> 
              : articleList.length <= 3
              ? <Grid item xs={12}>
                  {articleList.map((arti, index) => (
                    <Fragment key={index}>
                      <Grid container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Paper className="imgPaper">
                          <img src={arti.image} width="60px" height="60px"></img>
                        </Paper>
                      </Grid>
                      <Grid item xs={9}>
                        <div className="titleDiv">{arti.title}</div>
                        <div className="dateDiv">{arti.created_at.substring(0,10)} 작성</div>
                      </Grid>
                    </Grid>
                    <hr width="350px"></hr>
                    </Fragment>
                  ))}
                </Grid>
              : <Grid item xs={12}>
                  <Grid container justify="center" alignItems="center">
                    <Grid item xs={3}>
                      <Paper className="imgPaper">
                        <img src={articleList[articleList.length - 1].image} width="60px" height="60px"></img>
                      </Paper>
                    </Grid>
                    <Grid item xs={9}>
                      <div className="titleDiv">{articleList[articleList.length - 1].title}</div>
                      <div className="dateDiv">{articleList[articleList.length - 1].created_at.substring(0,10)} 작성</div>
                    </Grid>
                  </Grid>
                  <hr width="350px"></hr>
                  <Grid container justify="center" alignItems="center">
                    <Grid item xs={3}>
                      <Paper className="imgPaper">
                        <img src={articleList[articleList.length - 2].image} width="60px" height="60px"></img>
                      </Paper>
                    </Grid>
                    <Grid item xs={9}>
                      <div className="titleDiv">{articleList[articleList.length - 2].title}</div>
                      <div className="dateDiv">{articleList[articleList.length - 2].created_at.substring(0,10)} 작성</div>
                    </Grid>
                  </Grid>
                  <hr width="350px"></hr>
                  <Grid container justify="center" alignItems="center">
                    <Grid item xs={3}>
                      <Paper className="imgPaper">
                        <img src={articleList[articleList.length - 3].image} width="60px" height="60px"></img>
                      </Paper>
                    </Grid>
                    <Grid item xs={9}>
                      <div className="titleDiv">{articleList[articleList.length - 3].title}</div>
                      <div className="dateDiv">{articleList[articleList.length - 3].created_at.substring(0,10)} 작성</div>
                    </Grid>
                  </Grid>
                  <hr width="350px"></hr>
                </Grid>
              }
            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </Wrapper>
  );
};

export default MyForest;
