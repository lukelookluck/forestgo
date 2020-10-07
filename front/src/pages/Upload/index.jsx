import React, { useState, useContext } from "react";
import Wrapper from "./styles";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import { Grid, Button, TextField } from "@material-ui/core";
import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

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
        alert("식물이 저장되었습니다!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function goArticleForm(data) {
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
      })
      .catch((error) => {
        console.log(error);
      });

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
            {!flowerName ? (
              <Grid className="ann3">사진 인식 중</Grid>
            ) : flowerName === "알 수 없음" ? (
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} className="ann">
                  식물을 인식하지 못했어요 ;(
                </Grid>
                <Grid item xs={12} className="ann2">
                  식물 종류 대규모 업데이트 예정이니<br></br>
                  기대해주세요!
                </Grid>
              </Grid>
            ) : (
              <Grid container justify="center" alignItems="center">
                <Grid container justify="center" alignItems="center">
                  <Grid item className="data">
                    {flowerName}
                  </Grid>
                  <Grid item className="add">
                    &nbsp;입니다!
                  </Grid>
                </Grid>

                <Grid container justify="center" alignItems="center">
                  <Grid item className="add">
                    꽃말은&nbsp;
                  </Grid>
                  <Grid item className="data">
                    {flowerSymbol}
                  </Grid>
                  <Grid item className="add">
                    &nbsp;이며
                  </Grid>
                </Grid>

                <Grid container justify="center" alignItems="center">
                  <Grid item className="data">
                    {flowerSeason}
                  </Grid>
                  <Grid item className="add">
                    &nbsp;에 볼 수 있어요
                  </Grid>
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
              </Grid>
            )}
          </div>
        )}
      </Grid>
    </Wrapper>
  );
}
