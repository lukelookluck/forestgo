import React, { useState, useContext } from "react";
import Wrapper from "./styles";
import axios from "axios";

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

  const [articleFormData, setArticleFormData] = useState({
    id: null,
    user: user.user.id,
    title: "",
    detail: "",
    image: "",
  });

  let history = useHistory();

  const getFlowerInfo = () => {
    console.log("들어왔음!");
    const data = {
      img: articleFormData.image,
    };
    console.log(articleFormData.image);
    console.log(data.img);
    axios.post(`${serverUrl}/api/forestbook/flower/`, data , {
      headers: {
        Authorization: `JWT ${user.token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      console.log("찾음");
    })
    .catch((err) => {
      console.log(err.response);

      // console.log(err.response.data);
      // console.log(err.response.headers);
      console.log("못찾음");
    });
  }

  function handleSubmit(data) {
    if (data.id) {
      axios
        .put(`${serverUrl}/community/${data.id}/`, data, {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
        })
        .then((res) => {
          history.push("/main");
          props.setValue(0);
          window.scrollTo({ bottom: 0, behavior: "smooth" });
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
        history.push("/main");
        props.setValue(0);
        window.scrollTo({ bottom: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("data", data);
  }

  return (
    <Wrapper>
      <Grid className="root">
        <Grid item xs={12}>
          <ImageUploadBtn
            setIsImage={setIsImage}
            articleFormData={articleFormData}
            setArticleFormData={setArticleFormData}
          />
        </Grid>
        {isImage && (
          <Grid item xs={12}>
            <h1 onClick={getFlowerInfo}>뭘까용</h1>
            <p>사용자 토큰 : {user.token}</p>
            <p>파일이름 : {articleFormData.image}</p>
            <p>식물 정보 : OOO</p>
            <p>식물 정보 : OOO</p>
          </Grid>
        )}
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
        <Grid item xs={12} className="submitBtn-box">
          <Button
            type="submit"
            variant="contained"
            className="submitBtn"
            onClick={() => handleSubmit(articleFormData)}
          >
            등록
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
