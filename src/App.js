import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import Planet from "./components/Planet";
import "./index.css";
import history from "./history";
const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" exact component={Login} />
          <Route path="/search" component={Search} />
          <Route path="/planets/:id" component={Planet} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
