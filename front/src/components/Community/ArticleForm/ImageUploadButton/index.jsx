import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import Wrapper from "./style";
import InputImage from "../InputImage/";

import { CommonContext } from "../../../../context/CommonContext";
import ArticleForm from "../../../../pages/ArticleForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function ImageUploadButton(props) {
  const classes = useStyles();
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64, web화면에 띄워주는 역할
  const [imgFile, setImgFile] = useState(null); //파일

  const handleChangeFile = (event) => {
    // for (let i = 0; i < event.target.files.length; i++) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장
    setImgFile(event.target.files); // 파일 상태 업데이트
    console.log("asdasdasd", event.target.files[0]);

    // const formData = new FormData();
    // formData.append("name", "chris");
    // console.log("formData", formData);

    reader.onloadend = () => {
      console.log("imgFile", imgFile);
      // 2. 읽기가 완료되면
      console.log("reader", reader);
      const base64 = reader.result;
      // console.log("base64", base64);
      setImgBase64((imgBase64) => [
        { id: imgBase64.length, value: base64.toString("base64") },
      ]); // 파일 base64 상태 업데이트

      // console.log("imgBase64", imgBase64);
      window.scroll({ left: 0, top: 1000, behavior: "smooth" });

      props.setIsImage(true);
      props.setArticleFormData({
        ...props.articleFormData,
        image: base64,
      });
    };
  };

  // const inputImage = imgBase64.map((item, index) => {
  //   return (
  //     <span key={index}>
  //       <img className="input-image" src={item.value} alt="" />;
  //     </span>
  //   );
  // });

  return (
    <Wrapper>
      {/* <div className="input-image-box">{inputImage}</div> */}
      <InputImage temp={imgBase64} />
      {imgBase64.length == 0 && (
        <div className="input-footer">
          <input
            accept="image/*"
            capture="camera"
            className={classes.input}
            id="icon-button-file"
            type="file"
            // multiple
            onChange={handleChangeFile}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera className="CameraIcon" />
            </IconButton>
          </label>
        </div>
      )}
    </Wrapper>
  );
}
