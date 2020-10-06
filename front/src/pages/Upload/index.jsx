import React, { useState, useEffect, useContext, Fragment } from "react";
import Wrapper from "./styles";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import { Grid, Button, TextField } from "@material-ui/core";
import Header from "../../layout/Header/";
import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import Temp1 from "../../components/Community/ArticleForm/Temp1";
import { CommonContext } from "../../context/CommonContext";

export default function Upload(props) {
  const { serverUrl, user } = useContext(CommonContext);
  const [isImage, setIsImage] = useState(false);
  const [flowerName, setflowerName] = useState();
  const [flowerSymbol, setflowerSymbol] = useState();
  const [flowerSeason, setflowerSeason] = useState();
  const [flowerPk, setflowerPk] = useState();

  const [takenImage, setTakenImage] = useState("");

  let history = useHistory();

  // function handleSubmit(data) {
  //   if (data.id) {
  //     axios
  //       .put(`${serverUrl}/community/${data.id}/`, data, {
  //         headers: {
  //           Authorization: `JWT ${user.token}`,
  //         },
  //       })
  //       .then((res) => {
  //         history.push("/main");
  //         props.setValue(0);
  //         window.scrollTo({ bottom: 0, behavior: "smooth" });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return;
  //   }
  //   axios
  //     .post(`${serverUrl}/community/`, data, {
  //       headers: {
  //         Authorization: `JWT ${user.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       history.push("/main");
  //       props.setValue(0);
  //       window.scrollTo({ bottom: 0, behavior: "smooth" });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   console.log("data", data);
  // }

  function savePic() {
    console.log("여기!");
    console.log(flowerPk);
    Axios.get(`${serverUrl}/api/forestbook/save/`, {
      headers: {
        Authorization: `JWT ${user.token}`,
      },
      params: {
        pk: flowerPk,
      },
    })
      .then((response) => {
        console.log(response);
        history.push("/Main");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function goArticleForm(data) {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scroll({ top: 100, behavior: "smooth" });
    }, 500);

    history.push({
      pathname: "/Create",
      state: {
        image: data,
      },
    });
  }

  return (
    <Wrapper>
      <Grid className="root">
        <Grid item xs={12}>
          <ImageUploadBtn
            setIsImage={setIsImage}
            takenImage={takenImage}
            setTakenImage={setTakenImage}
            flowerName={flowerName}
            setflowerName={setflowerName}
            flowerSymbol={flowerSymbol}
            setflowerSymbol={setflowerSymbol}
            flowerSeason={flowerSeason}
            setflowerSeason={setflowerSeason}
            flowerPk={flowerPk}
            setflowerPk={setflowerPk}
          />
        </Grid>
        {isImage && (
          <div>
            {flowerName === "알 수 없음"
            ? <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Button>
                    다시 찾기
                  </Button>
                </Grid>
              </Grid>
            : <Grid container justify="center" alignItems="center">
                <Grid item xs={12} className="fname">
                  {flowerName}
                </Grid>
                <Grid item xs={12} className="fsym">
                  {flowerSymbol}
                </Grid>
                <Grid item xs={12} className="fsea">
                  {flowerSeason}
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className="savePic"
                    variant="contained"
                    onClick={() => savePic()}
                  >
                    저장하기
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    className="submitBtn"
                    onClick={() => goArticleForm(takenImage)}
                  >
                    저장 후 글쓰기
                  </Button>
                </Grid>
              </Grid>}
          </div>
        )}
      </Grid>
    </Wrapper>
  );
}
