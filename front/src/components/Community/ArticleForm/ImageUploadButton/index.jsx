import React, { useState, useContext } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import Wrapper from "./style";
import InputImage from "../InputImage/";

import { CommonContext } from "../../../../context/CommonContext";

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
  const { serverUrl, user } = useContext(CommonContext);
  const classes = useStyles();
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64, web화면에 띄워주는 역할
  // const [imgFile, setImgFile] = useState(null); //파일

  const handleChangeFile = (event) => {
    // for (let i = 0; i < event.target.files.length; i++) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장
    // setImgFile(event.target.files); // 파일 상태 업데이트

    let formData = new FormData();
    formData.append("img", event.target.files[0]);
    getFlowerInfo(formData);

    reader.onloadend = () => {
      // 2. 읽기가 완료되면
      const base64 = reader.result;
      console.log(base64);

      setImgBase64((imgBase64) => [
        { id: imgBase64.length, value: base64.toString("base64") },
      ]); // 파일 base64 상태 업데이트

      setTimeout(() => {
        window.scroll({ top: 200, behavior: "smooth" });
      }, 800);

      props.setIsImage(true);
      props.setTakenImage(base64);
    };
  };

  const getFlowerInfo = (data) => {
    axios
      .post(`${serverUrl}/api/forestbook/flower/`, data, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        props.setflowerName(res.data[0].fields.name);
        props.setflowerSymbol(res.data[0].fields.sympolism);
        props.setflowerSeason(res.data[0].fields.season);
        props.setflowerPk(res.data[0].userbook_pk);
        console.log("찾음");
      })
      .catch((err) => {
        console.log(err.response);

        console.log(err.response.data);
        console.log("못찾음");
      });
  };

  return (
    <Wrapper>
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
