import React, { useEffect, useState, useContext } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import axios from "axios";

import Wrapper from "./style";
import Header from "../../layout/Header/";

import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import InputImage from "../../components/Community/ArticleForm/InputImage/";
import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  const { serverUrl, user } = useContext(CommonContext);
  const [articleFormData, setArticleFormData] = useState({
    id: null,
    user: user.user.id,
    title: "",
    detail: "",
    image: props.location.state.image,
  });

  function toDataURL(src, callback) {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    img.onload = function () {
      var canvas = document.createElement("CANVAS");
      var ctx = canvas.getContext("2d");
      var dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL("image/jpeg");
      callback(dataURL);
    };
  }

  function refreshList() {
    if (props.location.state.article) {
      const article = props.location.state.article;
      toDataURL(props.location.state.article.image, function (dataURL) {
        setArticleFormData({
          ...articleFormData,
          id: article.id,
          title: article.title,
          detail: article.detail,
          image: dataURL,
        });
      });
    }
  }
  let mySubmit = "등록";
  if (props.location.state.article) {
    mySubmit = "수정완료";
  }

  useEffect(() => {
    refreshList();
  }, []);

  useEffect(() => {
    const unblock = props.history.block((location, action) => {
      if (action === "POP") {
        if (window.confirm("작성하던 내용이 없어집니다. 정말 떠나실건가요?")) {
          return props.history.push("/main");
        } else {
          return false;
        }
      }
    });
    return () => {
      unblock();
    };
  }, [props.history]);

  function handleSubmit(data) {
    console.log(data);
    if (data.id) {
      axios
        .put(`${serverUrl}/community/${data.id}/`, data, {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
        })
        .then((res) => {
          props.history.push("/main");
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    axios
      .post(`${serverUrl}/community/`, data, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
      .then((res) => {
        props.history.push("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <Header></Header>
      <Grid container className="root" justify="center" alignItems="center">
        <div className="input-image-box">
          <img
            id="img"
            className="input-image"
            src={props.location.state.image || articleFormData.image}
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
            onClick={() => props.history.goBack()}
          >
            뒤로가기
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="submitBtn"
            onClick={() => handleSubmit(articleFormData)}
          >
            {mySubmit}
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
