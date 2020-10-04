import React, { useEffect, useState, useContext } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import axios from "axios";

import Wrapper from "./style";
import Header from "../../layout/Header/";

import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  // const { serverUrl, user } = useContext(CommonContext);
  const [articleFormData, setArticleFormData] = useState({
    id: null,
    title: "",
    detail: "",
    drink_name: "",
    user: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    measure1: "",
    measure2: "",
    measure3: "",
    measure4: "",
    measure5: "",
    measure6: "",
    image: "",
  });

  // function refreshList() {
  //   if (props.location.state) {
  //     const article = props.location.state.article;
  //     setArticleFormData({
  //       ...articleFormData,
  //       id: article.id,
  //       title: article.title,
  //       detail: article.detail,
  //       drink_name: article.title,
  //       ingredient1: article.ingredient1,
  //       ingredient2: article.ingredient2,
  //       ingredient3: article.ingredient3,
  //       ingredient4: article.ingredient4,
  //       ingredient5: article.ingredient5,
  //       ingredient6: article.ingredient6,
  //       measure1: article.measure1,
  //       measure2: article.measure2,
  //       measure3: article.measure3,
  //       measure4: article.measure4,
  //       measure5: article.measure5,
  //       measure6: article.measure6,
  //     });
  //   }
  // }

  // useEffect(() => {
  //   refreshList();
  // }, []);

  // useEffect(() => {
  //   const unblock = props.history.block((location, action) => {
  //     if (action === "POP") {
  //       if (window.confirm("작성하던 내용이 없어집니다. 정말 떠나실건가요?")) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //   });
  //   return () => {
  //     unblock();
  //   };
  // }, [props.history]);

  // function handleSubmit(data) {
  //   if (data.id) {
  //     axios
  //       .put(`${serverUrl}/community/${data.id}/`, data, {
  //         headers: {
  //           Authorization: `JWT ${user.token}`,
  //         },
  //       })
  //       .then((res) => {
  //         props.history.push("/main");
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
  //       props.history.push("/main");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <Wrapper>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="form-header-title">
          <div>나만의 레시피 만들기</div>
        </Grid>

        <Grid item xs={10}>
          <form>
            <div>
              <TextField
                required
                fullWidth
                id="name"
                label="칵테일 이름"
                variant="outlined"
                autoFocus
                value={articleFormData.title}
                onChange={({ target: { value } }) => {
                  setArticleFormData({
                    ...articleFormData,
                    title: value,
                  });
                }}
              ></TextField>
            </div>
            <div>
              <TextField
                required
                fullWidth
                id="details"
                label="칵테일 소개"
                multiline
                rows={4}
                variant="outlined"
                value={articleFormData.detail}
                onChange={({ target: { value } }) => {
                  setArticleFormData({
                    ...articleFormData,
                    detail: value,
                    drink_name: value,
                  });
                }}
              ></TextField>
            </div>

            <ImageUploadBtn
              articleFormData={articleFormData}
              setArticleFormData={setArticleFormData}
            />

            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <Button
                  type="button"
                  variant="contained"
                  className="article-create-button"
                  onClick={() => {
                    // handleSubmit(articleFormData);
                  }}
                >
                  공유하기
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button type="reset" variant="contained" className="resetBtn">
                  다시 입력
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
