import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { builder, BuilderComponent } from "@builder.io/react";
import Home from "./components/home";
import Test from "./components/builder";

builder.init("2650ccbc70a94ac99af74aa88444628f");
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test-page">test page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/test-page"
            render={() => <BuilderComponent model="page" url="/test-page" />}
          />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
