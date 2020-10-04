import React, { useContext , useEffect, useState } from "react";
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

  let medalImg = "";

  useEffect(() => {
    refreshList();
    if(flowerList.length === 0) {
      console.log("i don't know")
    }
  }, []);

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

    // Axios.get(`${serverUrl}/api/forestbook/detail/${flowerList[1].forestbook_id}`, {
    //   headers: {
    //     Authorization: `JWT ${user.token}`,
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //     // console.log('사용자 아이디는 ' + user.user.id);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });


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

  const menu = flowerList.map((item) => {
    return (
      <div key={item.id}>
        <div>뭐냐고 {item.created_at}</div>
      </div>


      // <Carousel.Item key={item.id} className="caroitem" onClick={onClickRedirectPathHandler('/SelectCocktail/' + item.id)}>
      //   <img src={item.imgDrink} alt={item.strDrink} className="cocktailimg"></img>
      //   <Carousel.Caption>
      //     <h1>{item.strDrink}</h1>
      //     <p>{item.strInstructions}</p>
      //   </Carousel.Caption>
      // </Carousel.Item>
    );
  });


  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid container>
          <Grid item xs={9} className="nick">{user.user.username} 님</Grid>
          <Grid item xs={3} className="logout">
            <div onClick={handlelogout}>로그아웃</div>
          </Grid>
        </Grid>

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">등급</Grid>

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
            <Grid className="title">발견한 식물 수</Grid>
            <Grid className="count">{flowerList.length} 개</Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid">
          <Paper variant="outlined">
            <Grid className="title">서식지</Grid>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6} className="habi">육상 : 7개</Grid>
              <Grid item xs={6} className="habi">수상 : 2개</Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} className="papergrid" id="lastgrid">
          <Paper variant="outlined">
            <Grid className="title">계절</Grid>
            <Grid item xs={12} className="chart">
              <SeasonChart className="chart"></SeasonChart>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </Wrapper>
  );
};

export default MyForest;
