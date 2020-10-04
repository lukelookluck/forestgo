import React, { useEffect, useState, useContext } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import axios from "axios";

import Wrapper from "./style";
import Header from "../../layout/Header/";

import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import InputImage from "../../components/Community/ArticleForm/InputImage/";
import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  console.log([props.location.state.image]);
  const { serverUrl, user } = useContext(CommonContext);
  const [articleFormData, setArticleFormData] = useState({
    id: null,
    user: user.user.id,
    title: "",
    detail: "",
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
      <Header></Header>
      <Grid container className="root" justify="center" alignItems="center">
        <div className="input-image-box">
          <img
            className="input-image"
            src={props.location.state.image}
            alt="image"
          />
        </div>
        <Grid item xs={12} className="uploadForm">
          <form>
            <div>
              <TextField
                required
                fullWidth
                id="name"
                label="제목"
                variant="standard"
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
                label="내용을 입력하세요"
                multiline
                rows={10}
                variant="standard"
                value={articleFormData.detail}
                onChange={({ target: { value } }) => {
                  setArticleFormData({
                    ...articleFormData,
                    detail: value,
                  });
                }}
              ></TextField>
            </div>
          </form>
        </Grid>

        {/* <InputImage temp={[props.location.state.image]} /> */}
        <Grid item xs={12} className="submitBtn-box">
          <Button
            type="submit"
            variant="contained"
            className="submitBtn"
            // onClick={() => handleSubmit(articleFormData)}
          >
            등록
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
