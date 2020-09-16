import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Start from "./pages/Start/";
import SignUp from "./pages/SignUp/";
import FindPW from "./pages/FindPW/";
import MyForest from "./pages/MyForest/";
import Main from "./pages/Main/";
import Discovery from "./pages/Discovery/";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/findpW" component={FindPW}></Route>
        <Route exact path="/Main" component={Main}></Route>
        <Route exact path="/MyForest" component={MyForest}></Route>
        <Route exact path="/Discovery" component={Discovery}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
