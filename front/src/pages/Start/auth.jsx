import React, { useContext, useState, useEffect, useRef } from "react";
import Axios from "axios";
import { CommonContext } from "../../context/CommonContext";

const users = [
  { id: "test", pw: "123", name: "Kim" },
  { id: "admin", pw: "456", name: "Lee" },
];

export function Login({ id, pw }) {
  const user = users.find((user) => user.id === id && user.pw === pw);
  if (user === undefined) throw new Error();
  return user;

  // const { serverUrl, user, setUser } = useContext(CommonContext);
  // const url = `${serverUrl}/accounts/login/`;
  // const data = {
  //   username: id,
  //   password: pw,
  // };
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  // console.log("로그인2");
  // Axios.post(url, data, headers)
  //   .then((response) => {
  //     console.log(response);
  //     console.log(response.data);
  //     //   setUser(...response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     throw new Error();
  //   });
}
