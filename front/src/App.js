import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Start from "./pages/Start/";
import SignUp from "./pages/SignUp/";
import FindPW from "./pages/FindPW/";
import MyForest from "./pages/MyForest/";
import Main from "./pages/Main/";
import Discovery from "./pages/Discovery/";
import Upload from "./pages/Upload/";
import ArticleDisplay from "./pages/ArticleDisplay/";
import ArticleFrom from "./pages/ArticleForm/";
import MyPic from "./pages/MyPic/";
import MyArticle from "./pages/MyArticle/";

import { useLocalStorageSetState } from "./common/CommonHooks";
import { CommonContext } from "./context/CommonContext";

function App() {
  const HOST = "localhost:8000";
  const serverUrl = `http://${HOST}`;

  const [user, setUser] = useLocalStorageSetState(
    {
      token: "",
      user: {
        id: "",
        username: "",
        email: "",
        like_articles: "",
      },
    },
    "user"
  );

  return (
    <CommonContext.Provider
      value={{
        serverUrl,
        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start}></Route>
          <Route exact path="/Start" component={Start}></Route>
          <Route exact path="/Signup" component={SignUp}></Route>
          <Route exact path="/FindpW" component={FindPW}></Route>
          <Route exact path="/Main" component={Main}></Route>
          <Route exact path="/MyForest" component={MyForest}></Route>
          <Route exact path="/Discovery" component={Discovery}></Route>
          <Route exact path="/Upload" component={Upload}></Route>
          <Route exact path="/MyPic" component={MyPic}></Route>
          <Route exact path="/MyArticle" component={MyArticle}></Route>
          <Route
            exact
            path="/Article/:articleId"
            component={ArticleDisplay}
          ></Route>
          <Route exact path="/Create" component={ArticleFrom}></Route>
        </Switch>
      </BrowserRouter>
    </CommonContext.Provider>
  );
}

export default App;
