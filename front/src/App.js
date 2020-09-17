import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Start from "./pages/Start/";
import SignUp from "./pages/SignUp/";
import FindPW from "./pages/FindPW/";
import MyForest from "./pages/MyForest/";
import Main from "./pages/Main/";
import Discovery from "./pages/Discovery/";
import Upload from "./pages/Upload/";

function App() {
  return (
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;