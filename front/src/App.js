import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import "./App.css";
import Start from "./pages/Start/";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
