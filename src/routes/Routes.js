import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/team" render={() => <Team />} />
        <Route path="/blog" render={() => <Blog />} />
        <Route path="/contact" render={() => <Contact />} />
      </Switch>
    </Router>
  );
};

export default Routes;
