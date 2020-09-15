import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import "./App.css";
import Start from "./pages/Start/";
import MyForest from "./pages/MyForest/";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route exact path="/MyForest" component={MyForest}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
