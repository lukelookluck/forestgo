import React, { useState } from "react";
import Wrapper from "./styles";
import { Grid, Button, TextField } from "@material-ui/core";
import Header from "../../layout/Header/";
import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import Temp1 from "../../components/Community/ArticleForm/Temp1";

export default function Upload() {
  const [isImage, setIsImage] = useState(false);

  return (
    <Wrapper>
      <Grid className="root">
        <Grid item xs={12}>
          <ImageUploadBtn setIsImage={setIsImage} />
        </Grid>
        {isImage && (
          <Grid item xs={12}>
            <p>식물 이름 : OOO</p>
            <p>식물 정보 : OOO</p>
            <p>식물 정보 : OOO</p>
            <p>식물 정보 : OOO</p>
          </Grid>
        )}
        <Grid item xs={12} className="uploadForm">
          <div>
            <form>
              <div>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="제목"
                  variant="standard"

                  // autoFocus
                  // value={articleFormData.title}
                  // onChange={({ target: { value } }) => {
                  //   setArticleFormData({
                  //     ...articleFormData,
                  //     title: value,
                  //   });
                  // }}
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
                  // variant="standard"
                  // value={articleFormData.detail}
                  // onChange={({ target: { value } }) => {
                  //   setArticleFormData({
                  //     ...articleFormData,
                  //     detail: value,
                  //     drink_name: value,
                  //   });
                  // }}
                ></TextField>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} className="submitBtn-box">
          <Button type="submit" variant="contained" className="submitBtn">
            등록
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
